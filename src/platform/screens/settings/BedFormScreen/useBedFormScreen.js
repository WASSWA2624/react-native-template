/**
 * useBedFormScreen Hook
 * Shared logic for BedFormScreen (create/edit).
 */
import { useCallback, useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useI18n, useBed } from '@hooks';

const useBedFormScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { get, create, update, data, isLoading, errorCode, reset } = useBed();

  const isEdit = Boolean(id);
  const [label, setLabel] = useState('');
  const [status, setStatus] = useState('');
  const [tenantId, setTenantId] = useState('');
  const [facilityId, setFacilityId] = useState('');
  const [wardId, setWardId] = useState('');

  const bed = data && typeof data === 'object' && !Array.isArray(data) ? data : null;

  useEffect(() => {
    if (isEdit && id) {
      reset();
      get(id);
    }
  }, [isEdit, id, get, reset]);

  useEffect(() => {
    if (bed) {
      setLabel(bed.label ?? bed.name ?? '');
      setStatus(bed.status ?? '');
      setTenantId(bed.tenant_id ?? '');
      setFacilityId(bed.facility_id ?? '');
      setWardId(bed.ward_id ?? '');
    }
  }, [bed]);

  const handleSubmit = useCallback(async () => {
    try {
      const payload = {
        label: label.trim(),
        status: status.trim() || undefined,
      };
      if (!isEdit) {
        if (tenantId?.trim()) payload.tenant_id = tenantId.trim();
        if (facilityId?.trim()) payload.facility_id = facilityId.trim();
        if (wardId?.trim()) payload.ward_id = wardId.trim();
      }
      if (isEdit && id) {
        await update(id, payload);
      } else {
        await create(payload);
      }
      router.replace('/settings/beds');
    } catch {
      /* error from hook */
    }
  }, [isEdit, id, label, status, tenantId, facilityId, wardId, create, update, router]);

  const handleCancel = useCallback(() => {
    router.push('/settings/beds');
  }, [router]);

  return {
    isEdit,
    label,
    setLabel,
    status,
    setStatus,
    tenantId,
    setTenantId,
    facilityId,
    setFacilityId,
    wardId,
    setWardId,
    isLoading,
    hasError: Boolean(errorCode),
    bed,
    onSubmit: handleSubmit,
    onCancel: handleCancel,
    testID: 'bed-form-screen',
  };
};

export default useBedFormScreen;
