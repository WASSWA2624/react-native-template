/**
 * useMainRouteLayoutNative Hook
 * Shared logic for MainRouteLayout Android and iOS (header actions, overlay, nav items, mobile drawer)
 * File: useMainRouteLayoutNative.js
 */

import { useCallback, useMemo, useState } from 'react';
import { useAuth, useI18n, useNavigationVisibility, useUiState } from '@hooks';
import { MAIN_NAV_ITEMS } from '@config/sideMenu';
import { useAuthGuard } from '@navigation/guards';
import { ACTION_VARIANTS } from '@platform/components/navigation/GlobalHeader/types';
import { LoadingOverlay } from '@platform/components';

/**
 * Shared hook for MainRouteLayout native (Android/iOS)
 * @returns {Object} headerActions, overlaySlot, mainItems, isItemVisible, mobile drawer state
 */
const useMainRouteLayoutNative = () => {
  useAuthGuard();
  const { t } = useI18n();
  const { isAuthenticated, logout } = useAuth();
  const { isLoading } = useUiState();
  const { isItemVisible } = useNavigationVisibility();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const mainItems = useMemo(
    () =>
      MAIN_NAV_ITEMS.map((it) => ({
        ...it,
        href: it.path,
        label: t(`navigation.items.main.${it.id}`),
        icon: it.icon,
      })),
    [t]
  );

  const handleToggleSidebar = useCallback(() => setIsMobileSidebarOpen((p) => !p), []);
  const handleCloseMobileSidebar = useCallback(() => setIsMobileSidebarOpen(false), []);

  const authHeaderActions = useMemo(
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

  return {
    authHeaderActions,
    overlaySlot,
    mainItems,
    isItemVisible,
    isMobileSidebarOpen,
    handleToggleSidebar,
    handleCloseMobileSidebar,
  };
};

export default useMainRouteLayoutNative;
