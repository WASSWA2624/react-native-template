/**
 * MainRouteLayout Component - Android
 * Reusable route layout for authenticated/main app routes on Android
 * File: MainRouteLayout.android.jsx
 */

import React from 'react';
import { Slot } from 'expo-router';
import { useI18n, useShellBanners } from '@hooks';
import { AppFrame } from '@platform/layouts';
import {
  GlobalHeader,
  LanguageControls,
  NoticeSurface,
  ShellBanners,
  TabBar,
  ThemeControls,
} from '@platform/components';
import GlobalFooter, { FOOTER_VARIANTS } from '@platform/components/navigation/GlobalFooter';
import useMainRouteLayoutNative from './useMainRouteLayoutNative';

/**
 * MainRouteLayout component for Android
 */
const MainRouteLayoutAndroid = () => {
  const { t } = useI18n();
  const { headerActions, overlaySlot, mainItems, isItemVisible } = useMainRouteLayoutNative();
  const banners = useShellBanners();
  const bannerSlot = banners.length ? (
    <ShellBanners banners={banners} testID="main-shell-banners" />
  ) : null;

  return (
    <AppFrame
      header={
        <GlobalHeader
          title={t('navigation.mainNavigation')}
          accessibilityLabel={t('navigation.header.title')}
          testID="main-header"
          actions={headerActions}
          utilitySlot={(
            <>
              <LanguageControls testID="main-language-controls" />
              <ThemeControls testID="main-theme-controls" />
            </>
          )}
        />
      }
      footer={
        <GlobalFooter
          variant={FOOTER_VARIANTS.MAIN}
          accessibilityLabel={t('navigation.footer.title')}
          testID="main-footer"
          quickActionsSlot={(
            <TabBar
              accessibilityLabel={t('navigation.tabBar.title')}
              items={mainItems}
              isTabVisible={isItemVisible}
              testID="main-tabbar"
            />
          )}
        />
      }
      banner={bannerSlot}
      overlay={overlaySlot}
      notices={<NoticeSurface testID="main-notice-surface" />}
      accessibilityLabel={t('navigation.mainNavigation')}
      testID="main-route-layout"
    >
      <Slot />
    </AppFrame>
  );
};

export default MainRouteLayoutAndroid;

