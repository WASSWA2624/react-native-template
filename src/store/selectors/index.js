/**
 * Memoized Selectors
 * File: index.js
 * 
 * Phase 0-7: Only UI and Network selectors are included.
 * Feature selectors will be added in Phase 9.
 */
import { createSelector } from '@reduxjs/toolkit';
import { NETWORK_QUALITY } from '@utils/networkQuality';

// UI Selectors
const selectUI = (state) => state.ui;
const selectTheme = createSelector([selectUI], (ui) => ui.theme);
const selectLocale = createSelector([selectUI], (ui) => ui.locale);
const selectIsLoading = createSelector([selectUI], (ui) => ui.isLoading);
const selectSidebarWidth = createSelector([selectUI], (ui) => ui.sidebarWidth);
const selectIsSidebarCollapsed = createSelector([selectUI], (ui) => ui.isSidebarCollapsed);
const selectIsHeaderHidden = createSelector([selectUI], (ui) => ui.isHeaderHidden);
const selectHeaderActionVisibility = createSelector([selectUI], (ui) => ui.headerActionVisibility);

// Minimal Auth Selectors (Phase 0-7 - for guards)
// These read from UI slice until full auth feature is implemented in Phase 9
const selectIsAuthenticated = createSelector([selectUI], (ui) => ui.isAuthenticated);
const selectUser = createSelector([selectUI], (ui) => ui.user);

// Network Selectors
const selectNetwork = (state) => state.network;
const selectIsOnline = createSelector([selectNetwork], (network) => network.isOnline);
const selectIsOffline = createSelector([selectIsOnline], (isOnline) => !isOnline);
const selectIsSyncing = createSelector([selectNetwork], (network) => network.isSyncing);
const selectNetworkQuality = createSelector([selectNetwork], (network) => network.quality);
const selectIsLowQuality = createSelector(
  [selectIsOnline, selectNetworkQuality],
  (isOnline, quality) => isOnline && quality === NETWORK_QUALITY.LOW
);

export {
  // UI
  selectTheme,
  selectLocale,
  selectIsLoading,
  selectSidebarWidth,
  selectIsSidebarCollapsed,
  selectIsHeaderHidden,
  selectHeaderActionVisibility,
  // Auth (minimal - Phase 0-7)
  selectIsAuthenticated,
  selectUser,
  // Network
  selectIsOnline,
  selectIsOffline,
  selectIsSyncing,
  selectNetworkQuality,
  selectIsLowQuality,
};

export default {
  // UI
  selectTheme,
  selectLocale,
  selectIsLoading,
  selectSidebarWidth,
  selectIsSidebarCollapsed,
  selectIsHeaderHidden,
  selectHeaderActionVisibility,
  // Auth (minimal - Phase 0-7)
  selectIsAuthenticated,
  selectUser,
  // Network
  selectIsOnline,
  selectIsOffline,
  selectIsSyncing,
  selectNetworkQuality,
  selectIsLowQuality,
};
