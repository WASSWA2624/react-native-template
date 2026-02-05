/**
 * useMainRouteLayoutNative Hook
 * Shared logic for MainRouteLayout Android and iOS (header actions, overlay, nav items)
 * File: useMainRouteLayoutNative.js
 */

import { useMemo } from 'react';
import { useRouter } from 'expo-router';
import { useAuth, useI18n, useNavigationVisibility, useUiState } from '@hooks';
import { MAIN_NAV_ITEMS, getMenuIconGlyph } from '@config/sideMenu';
import { useAuthGuard } from '@navigation/guards';
import { ACTION_VARIANTS } from '@platform/components/navigation/GlobalHeader/types';
import { LoadingOverlay } from '@platform/components';

/**
 * Shared hook for MainRouteLayout native (Android/iOS)
 * @returns {Object} headerActions, overlaySlot, mainItems, isItemVisible
 */
const useMainRouteLayoutNative = () => {
  useAuthGuard();
  const { t } = useI18n();
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();
  const { isLoading } = useUiState();
  const { isItemVisible } = useNavigationVisibility();
  const mainItems = useMemo(
    () =>
      MAIN_NAV_ITEMS.map((it) => ({
        ...it,
        href: it.path,
        label: t(`navigation.items.main.${it.id}`),
        icon: getMenuIconGlyph(it.icon),
      })),
    [t]
  );

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
        <LoadingOverlay visible testID="main-loading-overlay" />
      ) : null,
    [isLoading]
  );

  return { headerActions, overlaySlot, mainItems, isItemVisible };
};

export default useMainRouteLayoutNative;
