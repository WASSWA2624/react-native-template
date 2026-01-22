/**
 * TenantSelectionScreen Component - iOS
 * Tenant selection screen for iOS platform
 * File: TenantSelectionScreen.ios.jsx
 */
import React, { useEffect } from 'react';
import { AuthFormLayout, Button, ErrorState, OfflineState, Stack } from '@platform/components';
import { useI18n } from '@hooks';
import { useLocalSearchParams } from 'expo-router';
import useTenantSelectionScreen from './useTenantSelectionScreen';

/**
 * TenantSelectionScreen component for iOS
 */
const TenantSelectionScreenIOS = () => {
  const { t } = useI18n();
  const params = useLocalSearchParams();
  const {
    tenants,
    selectedTenantId,
    isLoading,
    isOffline,
    errorMessage,
    canSubmit,
    loadTenants,
    handleSelectTenant,
    handleSubmit,
    handleGoBack,
  } = useTenantSelectionScreen();

  useEffect(() => {
    if (params.identifier) {
      loadTenants(params.identifier);
    }
  }, [params.identifier, loadTenants]);

  const statusSlot = isOffline ? (
    <OfflineState
      title={t('shell.banners.offline.title')}
      description={t('shell.banners.offline.message')}
      accessibilityLabel={t('shell.banners.offline.accessibilityLabel')}
      testID="tenant-selection-offline-state"
    />
  ) : errorMessage ? (
    <ErrorState
      title={t('auth.tenantSelection.error.title')}
      description={errorMessage}
      accessibilityLabel={t('auth.tenantSelection.error.title')}
      testID="tenant-selection-error-state"
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
        accessibilityLabel={t('auth.tenantSelection.button')}
        accessibilityHint={t('auth.tenantSelection.buttonHint')}
        testID="tenant-selection-button"
      >
        {t('auth.tenantSelection.button')}
      </Button>
      <Button
        variant="ghost"
        size="large"
        disabled={isLoading}
        onPress={handleGoBack}
        accessibilityLabel={t('common.back')}
        testID="tenant-selection-back"
      >
        {t('common.back')}
      </Button>
    </Stack>
  );

  return (
    <AuthFormLayout
      title={t('auth.tenantSelection.title')}
      description={t('auth.tenantSelection.description')}
      status={statusSlot}
      actions={actionSlot}
      accessibilityLabel={t('auth.tenantSelection.title')}
      testID="tenant-selection-screen"
      titleTestID="tenant-selection-title"
      descriptionTestID="tenant-selection-description"
    >
      <Stack spacing="md">
        {tenants.map((tenant) => (
          <Button
            key={tenant.tenant_id}
            variant={selectedTenantId === tenant.tenant_id ? 'primary' : 'outline'}
            size="large"
            onPress={() => handleSelectTenant(tenant.tenant_id)}
            accessibilityLabel={tenant.tenant_name}
            testID={`tenant-option-${tenant.tenant_id}`}
          >
            {tenant.tenant_name}
          </Button>
        ))}
      </Stack>
    </AuthFormLayout>
  );
};

export default TenantSelectionScreenIOS;
