/**
 * useWardFormScreen Hook
 * Shared logic for WardFormScreen (create/edit).
 */
import { useCallback, useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useI18n, useWard } from '@hooks';

const useWardFormScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { get, create, update, data, isLoading, errorCode, reset } = useWard();

  const isEdit = Boolean(id);
  const [name, setName] = useState('');
  const [wardType, setWardType] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [tenantId, setTenantId] = useState('');
  const [facilityId, setFacilityId] = useState('');

  const ward = data && typeof data === 'object' && !Array.isArray(data) ? data : null;

  useEffect(() => {
    if (isEdit && id) {
      reset();
      get(id);
    }
  }, [isEdit, id, get, reset]);

  useEffect(() => {
    if (ward) {
      setName(ward.name ?? '');
      setWardType(ward.ward_type ?? ward.type ?? '');
      setIsActive(ward.is_active ?? true);
      setTenantId(ward.tenant_id ?? '');
      setFacilityId(ward.facility_id ?? '');
    }
  }, [ward]);

  const handleSubmit = useCallback(async () => {
    try {
      const payload = {
        name: name.trim(),
        ward_type: wardType.trim() || undefined,
        is_active: isActive,
      };
      if (!isEdit) {
        if (tenantId?.trim()) payload.tenant_id = tenantId.trim();
        if (facilityId?.trim()) payload.facility_id = facilityId.trim();
      }
      if (isEdit && id) {
        await update(id, payload);
      } else {
        await create(payload);
      }
      router.replace('/settings/wards');
    } catch {
      /* error from hook */
    }
  }, [isEdit, id, name, wardType, isActive, tenantId, facilityId, create, update, router]);

  const handleCancel = useCallback(() => {
    router.push('/settings/wards');
  }, [router]);

  return {
    isEdit,
    name,
    setName,
    wardType,
    setWardType,
    isActive,
    setIsActive,
    tenantId,
    setTenantId,
    facilityId,
    setFacilityId,
    isLoading,
    hasError: Boolean(errorCode),
    ward,
    onSubmit: handleSubmit,
    onCancel: handleCancel,
    testID: 'ward-form-screen',
  };
};

export default useWardFormScreen;
