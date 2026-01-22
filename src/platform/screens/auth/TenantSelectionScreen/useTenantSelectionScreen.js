/**
 * useTenantSelectionScreen Hook
 * Shared behavior/logic for TenantSelectionScreen across all platforms.
 * File: useTenantSelectionScreen.js
 */
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { useI18n, useNetwork, useAuth } from '@hooks';
import { identifyUseCase, loginUseCase } from '@features/auth';
import { normalizePhoneNumber } from '@utils';

const useTenantSelectionScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { isOffline } = useNetwork();
  const { login } = useAuth();
  const [tenants, setTenants] = useState([]);
  const [selectedTenantId, setSelectedTenantId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const canSubmit = useMemo(
    () => Boolean(selectedTenantId) && !isLoading && !isOffline,
    [selectedTenantId, isLoading, isOffline]
  );

  const loadTenants = useCallback(async (identifierValue) => {
    if (!identifierValue) return;
    
    setIsLoading(true);
    setErrorMessage(null);
    setIdentifier(identifierValue);
    
    try {
      const result = await identifyUseCase({ identifier: identifierValue });
      if (result?.users && result.users.length > 0) {
        setTenants(result.users);
        if (result.users.length === 1) {
          // Auto-select if only one tenant
          setSelectedTenantId(result.users[0].tenant_id);
        }
      } else {
        setErrorMessage(t('auth.tenantSelection.noTenantsFound'));
      }
    } catch (error) {
      setErrorMessage(error?.message || t('auth.tenantSelection.error'));
    } finally {
      setIsLoading(false);
    }
  }, [t]);

  const handleSelectTenant = useCallback((tenantId) => {
    setSelectedTenantId(tenantId);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!canSubmit) return false;
    
    setIsLoading(true);
    setErrorMessage(null);
    
    try {
      const isEmail = identifier.includes('@');
      const payload = isEmail
        ? { email: identifier.toLowerCase() }
        : { phone: normalizePhoneNumber(identifier) };
      
      // Call login use case directly to check response
      const result = await loginUseCase({
        ...payload,
        password,
        tenant_id: selectedTenantId,
      });
      
      // Check if facility selection is required
      if (result?.requiresFacilitySelection) {
        router.push({
          pathname: '/facility-selection',
          params: {
            facilities: JSON.stringify(result.facilities),
            loginPayload: JSON.stringify({
              ...payload,
              password,
              tenant_id: selectedTenantId,
            }),
          },
        });
        return true;
      }
      
      // Normal login - dispatch to Redux to update state
      await login({
        ...payload,
        password,
        tenant_id: selectedTenantId,
      });
      
      // Navigation handled by auth guard
      return true;
    } catch (error) {
      setErrorMessage(error?.message || t('auth.tenantSelection.loginError'));
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [canSubmit, selectedTenantId, identifier, password, login, router, t]);

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return {
    tenants,
    selectedTenantId,
    isLoading,
    isOffline,
    errorMessage,
    canSubmit,
    identifier,
    password,
    loadTenants,
    handleSelectTenant,
    handleSubmit,
    handleGoBack,
  };
};

export default useTenantSelectionScreen;
