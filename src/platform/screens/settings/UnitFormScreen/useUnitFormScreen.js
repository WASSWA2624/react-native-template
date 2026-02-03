/**
 * useUnitFormScreen Hook
 * Shared logic for UnitFormScreen (create/edit).
 */
import { useCallback, useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useI18n, useUnit } from '@hooks';

const useUnitFormScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { get, create, update, data, isLoading, errorCode, reset } = useUnit();

  const isEdit = Boolean(id);
  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [tenantId, setTenantId] = useState('');

  const unit = data && typeof data === 'object' && !Array.isArray(data) ? data : null;

  useEffect(() => {
    if (isEdit && id) {
      reset();
      get(id);
    }
  }, [isEdit, id, get, reset]);

  useEffect(() => {
    if (unit) {
      setName(unit.name ?? '');
      setIsActive(unit.is_active ?? true);
      setTenantId(unit.tenant_id ?? '');
    }
  }, [unit]);

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
      router.replace('/settings/units');
    } catch {
      /* error from hook */
    }
  }, [isEdit, id, name, isActive, tenantId, create, update, router]);

  const handleCancel = useCallback(() => {
    router.push('/settings/units');
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
    unit,
    onSubmit: handleSubmit,
    onCancel: handleCancel,
    testID: 'unit-form-screen',
  };
};

export default useUnitFormScreen;
