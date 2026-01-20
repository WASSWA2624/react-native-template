/**
 * PatientRouteLayout Component - iOS
 * Reusable route layout for patient-facing routes on iOS
 * File: PatientRouteLayout.ios.jsx
 */
import React from 'react';
import { Slot } from 'expo-router';
import { useI18n, usePrimaryNavigation, useShellBanners, useUiState } from '@hooks';
import { useAuthGuard } from '@navigation/guards';
import { PatientFrame } from '@platform/layouts';
import {
  GlobalHeader,
  LanguageControls,
  LoadingOverlay,
  NoticeSurface,
  ShellBanners,
  TabBar,
  ThemeControls,
} from '@platform/components';
import GlobalFooter, { FOOTER_VARIANTS } from '@platform/components/navigation/GlobalFooter';

/**
 * PatientRouteLayout component for iOS
 */
const PatientRouteLayoutIOS = () => {
  useAuthGuard();
  const { t } = useI18n();
  const { isLoading } = useUiState();
  const { patientItems, isItemVisible } = usePrimaryNavigation();
  const banners = useShellBanners();
  const bannerSlot = banners.length ? <ShellBanners banners={banners} testID="patient-shell-banners" /> : null;
  const overlaySlot = isLoading ? <LoadingOverlay visible testID="patient-loading-overlay" /> : null;

  return (
    <PatientFrame
      header={(
        <GlobalHeader
          title={t('navigation.patientNavigation')}
          accessibilityLabel={t('navigation.header.title')}
          testID="patient-header"
          utilitySlot={(
            <>
              <LanguageControls testID="patient-language-controls" />
              <ThemeControls testID="patient-theme-controls" />
            </>
          )}
        />
      )}
      footer={(
        <GlobalFooter
          variant={FOOTER_VARIANTS.PATIENT}
          accessibilityLabel={t('navigation.footer.title')}
          testID="patient-footer"
          quickActionsSlot={(
            <TabBar
              accessibilityLabel={t('navigation.tabBar.title')}
              items={patientItems}
              isTabVisible={isItemVisible}
              testID="patient-tabbar"
            />
          )}
        />
      )}
      banner={bannerSlot}
      overlay={overlaySlot}
      notices={<NoticeSurface testID="patient-notice-surface" />}
      accessibilityLabel={t('navigation.patientNavigation')}
      testID="patient-route-layout"
    >
      <Slot />
    </PatientFrame>
  );
};

export default PatientRouteLayoutIOS;
