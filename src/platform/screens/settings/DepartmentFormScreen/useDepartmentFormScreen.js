/**
 * useDepartmentFormScreen Hook
 * Shared logic for DepartmentFormScreen (create/edit).
 */
import { useCallback, useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useI18n, useDepartment } from '@hooks';

const useDepartmentFormScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { get, create, update, data, isLoading, errorCode, reset } = useDepartment();

  const isEdit = Boolean(id);
  const [name, setName] = useState('');
  const [departmentType, setDepartmentType] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [tenantId, setTenantId] = useState('');

  const department = data && typeof data === 'object' && !Array.isArray(data) ? data : null;

  useEffect(() => {
    if (isEdit && id) {
      reset();
      get(id);
    }
  }, [isEdit, id, get, reset]);

  useEffect(() => {
    if (department) {
      setName(department.name ?? '');
      setDepartmentType(department.department_type ?? '');
      setIsActive(department.is_active ?? true);
      setTenantId(department.tenant_id ?? '');
    }
  }, [department]);

  const handleSubmit = useCallback(async () => {
    try {
      const payload = {
        name: name.trim(),
        department_type: departmentType.trim() || undefined,
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
      router.replace('/settings/departments');
    } catch {
      /* error from hook */
    }
  }, [isEdit, id, name, departmentType, isActive, tenantId, create, update, router]);

  const handleCancel = useCallback(() => {
    router.push('/settings/departments');
  }, [router]);

  return {
    isEdit,
    name,
    setName,
    departmentType,
    setDepartmentType,
    isActive,
    setIsActive,
    tenantId,
    setTenantId,
    isLoading,
    hasError: Boolean(errorCode),
    department,
    onSubmit: handleSubmit,
    onCancel: handleCancel,
    testID: 'department-form-screen',
  };
};

export default useDepartmentFormScreen;
