/**
 * FacilitySelectionScreen Component - iOS
 * Facility selection screen for iOS platform
 * File: FacilitySelectionScreen.ios.jsx
 */
import React, { useEffect } from 'react';
import { AuthFormLayout, Button, ErrorState, OfflineState, Stack } from '@platform/components';
import { useI18n } from '@hooks';
import { useLocalSearchParams } from 'expo-router';
import useFacilitySelectionScreen from './useFacilitySelectionScreen';

/**
 * FacilitySelectionScreen component for iOS
 */
const FacilitySelectionScreenIOS = () => {
  const { t } = useI18n();
  const params = useLocalSearchParams();
  const {
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
  } = useFacilitySelectionScreen();

  useEffect(() => {
    if (params.facilities) {
      try {
        const facilitiesList = JSON.parse(params.facilities);
        const payload = params.loginPayload ? JSON.parse(params.loginPayload) : null;
        initialize(facilitiesList, payload);
      } catch (error) {
        console.error('Failed to parse facilities data:', error);
      }
    }
  }, [params.facilities, params.loginPayload, initialize]);

  const statusSlot = isOffline ? (
    <OfflineState
      title={t('shell.banners.offline.title')}
      description={t('shell.banners.offline.message')}
      accessibilityLabel={t('shell.banners.offline.accessibilityLabel')}
      testID="facility-selection-offline-state"
    />
  ) : errorMessage ? (
    <ErrorState
      title={t('auth.facilitySelection.error.title')}
      description={errorMessage}
      accessibilityLabel={t('auth.facilitySelection.error.title')}
      testID="facility-selection-error-state"
    />
  ) : null;

  const actionSlot = (
    <Stack spacing="sm">
      <Button
        variant="primary"
        size="large"
        loading={isLoading}
        disabled={!canSubmit}
        onPress={handleSubmit}
        accessibilityLabel={t('auth.facilitySelection.button')}
        accessibilityHint={t('auth.facilitySelection.buttonHint')}
        testID="facility-selection-button"
      >
        {t('auth.facilitySelection.button')}
      </Button>
      <Button
        variant="ghost"
        size="large"
        disabled={isLoading}
        onPress={handleGoBack}
        accessibilityLabel={t('common.back')}
        testID="facility-selection-back"
      >
        {t('common.back')}
      </Button>
    </Stack>
  );

  return (
    <AuthFormLayout
      title={t('auth.facilitySelection.title')}
      description={t('auth.facilitySelection.description')}
      status={statusSlot}
      actions={actionSlot}
      accessibilityLabel={t('auth.facilitySelection.title')}
      testID="facility-selection-screen"
      titleTestID="facility-selection-title"
      descriptionTestID="facility-selection-description"
    >
      <Stack spacing="md">
        {facilities.map((facility) => (
          <Button
            key={facility.id}
            variant={selectedFacilityId === facility.id ? 'primary' : 'outline'}
            size="large"
            onPress={() => handleSelectFacility(facility.id)}
            accessibilityLabel={facility.name}
            testID={`facility-option-${facility.id}`}
          >
            {facility.name}
          </Button>
        ))}
      </Stack>
    </AuthFormLayout>
  );
};

export default FacilitySelectionScreenIOS;
