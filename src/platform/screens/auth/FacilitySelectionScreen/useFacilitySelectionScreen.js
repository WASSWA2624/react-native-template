/**
 * useFacilitySelectionScreen Hook
 * Shared behavior/logic for FacilitySelectionScreen across all platforms.
 * File: useFacilitySelectionScreen.js
 */
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { useI18n, useNetwork, useAuth } from '@hooks';

const useFacilitySelectionScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { isOffline } = useNetwork();
  const { login } = useAuth();
  const [facilities, setFacilities] = useState([]);
  const [selectedFacilityId, setSelectedFacilityId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginPayload, setLoginPayload] = useState(null);

  const canSubmit = useMemo(
    () => Boolean(selectedFacilityId) && !isLoading && !isOffline,
    [selectedFacilityId, isLoading, isOffline]
  );

  const initialize = useCallback((facilitiesList, payload) => {
    setFacilities(facilitiesList || []);
    setLoginPayload(payload);
    if (facilitiesList && facilitiesList.length === 1) {
      // Auto-select if only one facility
      setSelectedFacilityId(facilitiesList[0].id);
    }
  }, []);

  const handleSelectFacility = useCallback((facilityId) => {
    setSelectedFacilityId(facilityId);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!canSubmit || !loginPayload) return false;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      await login({
        ...loginPayload,
        facility_id: selectedFacilityId,
      });
      router.replace('/home');
    } catch (error) {
      setErrorMessage(error?.message || t('auth.facilitySelection.error'));
    } finally {
      setIsLoading(false);
    }

    return true;
  }, [canSubmit, selectedFacilityId, loginPayload, login, router, t]);

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return {
    facilities,
    selectedFacilityId,
    isLoading,
    isOffline,
    errorMessage,
    canSubmit,
    initialize,
    handleSelectFacility,
    handleSubmit,
    handleGoBack,
  };
};

export default useFacilitySelectionScreen;
