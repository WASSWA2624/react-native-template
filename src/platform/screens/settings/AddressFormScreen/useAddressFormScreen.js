/**
 * useAddressFormScreen Hook
 * Shared logic for AddressFormScreen (create/edit).
 */
import { useCallback, useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useI18n, useAddress } from '@hooks';

const useAddressFormScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { get, create, update, data, isLoading, errorCode, reset } = useAddress();

  const isEdit = Boolean(id);
  const [line1, setLine1] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [tenantId, setTenantId] = useState('');

  const address = data && typeof data === 'object' && !Array.isArray(data) ? data : null;

  useEffect(() => {
    if (isEdit && id) {
      reset();
      get(id);
    }
  }, [isEdit, id, get, reset]);

  useEffect(() => {
    if (address) {
      setLine1(address.line_1 ?? address.line1 ?? '');
      setCity(address.city ?? '');
      setCountry(address.country ?? '');
      setTenantId(address.tenant_id ?? '');
    }
  }, [address]);

  const handleSubmit = useCallback(async () => {
    try {
      const payload = {
        line_1: line1.trim(),
        city: city.trim() || undefined,
        country: country.trim() || undefined,
      };
      if (!isEdit && tenantId?.trim()) {
        payload.tenant_id = tenantId.trim();
      }
      if (isEdit && id) {
        await update(id, payload);
      } else {
        await create(payload);
      }
      router.replace('/settings/addresses');
    } catch {
      /* error from hook */
    }
  }, [isEdit, id, line1, city, country, tenantId, create, update, router]);

  const handleCancel = useCallback(() => {
    router.push('/settings/addresses');
  }, [router]);

  return {
    isEdit,
    line1,
    setLine1,
    city,
    setCity,
    country,
    setCountry,
    tenantId,
    setTenantId,
    isLoading,
    hasError: Boolean(errorCode),
    address,
    onSubmit: handleSubmit,
    onCancel: handleCancel,
    testID: 'address-form-screen',
  };
};

export default useAddressFormScreen;
