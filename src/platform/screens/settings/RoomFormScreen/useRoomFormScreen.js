/**
 * useRoomFormScreen Hook
 * Shared logic for RoomFormScreen (create/edit).
 */
import { useCallback, useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useI18n, useRoom } from '@hooks';

const useRoomFormScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { get, create, update, data, isLoading, errorCode, reset } = useRoom();

  const isEdit = Boolean(id);
  const [name, setName] = useState('');
  const [floor, setFloor] = useState('');
  const [tenantId, setTenantId] = useState('');
  const [facilityId, setFacilityId] = useState('');

  const room = data && typeof data === 'object' && !Array.isArray(data) ? data : null;

  useEffect(() => {
    if (isEdit && id) {
      reset();
      get(id);
    }
  }, [isEdit, id, get, reset]);

  useEffect(() => {
    if (room) {
      setName(room.name ?? '');
      setFloor(room.floor ?? '');
      setTenantId(room.tenant_id ?? '');
      setFacilityId(room.facility_id ?? '');
    }
  }, [room]);

  const handleSubmit = useCallback(async () => {
    try {
      const payload = {
        name: name.trim(),
        floor: floor.trim() || undefined,
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
      router.replace('/settings/rooms');
    } catch {
      /* error from hook */
    }
  }, [isEdit, id, name, floor, tenantId, facilityId, create, update, router]);

  const handleCancel = useCallback(() => {
    router.push('/settings/rooms');
  }, [router]);

  return {
    isEdit,
    name,
    setName,
    floor,
    setFloor,
    tenantId,
    setTenantId,
    facilityId,
    setFacilityId,
    isLoading,
    hasError: Boolean(errorCode),
    room,
    onSubmit: handleSubmit,
    onCancel: handleCancel,
    testID: 'room-form-screen',
  };
};

export default useRoomFormScreen;
