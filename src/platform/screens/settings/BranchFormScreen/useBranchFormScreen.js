/**
 * useBranchFormScreen Hook
 * Shared logic for BranchFormScreen (create/edit).
 */
import { useCallback, useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useI18n, useBranch } from '@hooks';

const useBranchFormScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { get, create, update, data, isLoading, errorCode, reset } = useBranch();

  const isEdit = Boolean(id);
  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [tenantId, setTenantId] = useState('');

  const branch = data && typeof data === 'object' && !Array.isArray(data) ? data : null;

  useEffect(() => {
    if (isEdit && id) {
      reset();
      get(id);
    }
  }, [isEdit, id, get, reset]);

  useEffect(() => {
    if (branch) {
      setName(branch.name ?? '');
      setIsActive(branch.is_active ?? true);
      setTenantId(branch.tenant_id ?? '');
    }
  }, [branch]);

  const handleSubmit = useCallback(async () => {
    try {
      const payload = {
        name: name.trim(),
        is_active: isActive,
      };
      if (!isEdit && tenantId?.trim()) {
        payload.tenant_id = tenantId.trim();
      }
      if (isEdit && id) {
        await update(id, payload);
      } else {
        await create(payload);
      }
      router.replace('/settings/branches');
    } catch {
      /* error from hook */
    }
  }, [isEdit, id, name, isActive, tenantId, create, update, router]);

  const handleCancel = useCallback(() => {
    router.push('/settings/branches');
  }, [router]);

  return {
    isEdit,
    name,
    setName,
    isActive,
    setIsActive,
    tenantId,
    setTenantId,
    isLoading,
    hasError: Boolean(errorCode),
    branch,
    onSubmit: handleSubmit,
    onCancel: handleCancel,
    testID: 'branch-form-screen',
  };
};

export default useBranchFormScreen;
