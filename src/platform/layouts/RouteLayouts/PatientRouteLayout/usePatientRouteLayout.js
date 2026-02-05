/**
 * usePatientRouteLayout Hook
 * Shared logic for PatientRouteLayout (header actions, overlay, nav items)
 * File: usePatientRouteLayout.js
 */

import { useMemo } from 'react';
import { useRouter } from 'expo-router';
import { useAuth, useI18n, useNavigationVisibility, useUiState } from '@hooks';
import { PATIENT_MENU_ITEMS } from '@config/sideMenu';
import { useAuthGuard } from '@navigation/guards';
import { ACTION_VARIANTS } from '@platform/components/navigation/GlobalHeader/types';
import { LoadingOverlay } from '@platform/components';

/**
 * Shared hook for PatientRouteLayout (all platforms)
 * @returns {Object} headerActions, overlaySlot, patientItems, isItemVisible
 */
const usePatientRouteLayout = () => {
  useAuthGuard();
  const { t } = useI18n();
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();
  const { isLoading } = useUiState();
  const { isItemVisible } = useNavigationVisibility();
  const patientItems = PATIENT_MENU_ITEMS;

  const headerActions = useMemo(
    () =>
      isAuthenticated
        ? [
            {
              id: 'logout',
              label: t('navigation.header.logout'),
              accessibilityLabel: t('navigation.header.logout'),
              onPress: logout,
              variant: ACTION_VARIANTS.GHOST,
            },
          ]
        : [],
    [isAuthenticated, logout, t]
  );

  const overlaySlot = useMemo(
    () =>
      isLoading ? (
        <LoadingOverlay visible testID="patient-loading-overlay" />
      ) : null,
    [isLoading]
  );

  return { headerActions, overlaySlot, patientItems, isItemVisible };
};

export default usePatientRouteLayout;
