/**
 * PatientFrame Component - Web
 * Patient-facing frame with slots for header, footer, and overlays
 * File: PatientFrame.web.jsx
 */

import React from 'react';
import { useI18n } from '@hooks';
import {
  StyledBody,
  StyledBanner,
  StyledBreadcrumbs,
  StyledContainer,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledOverlay,
  StyledSidebar,
  StyledSkipLink,
} from './PatientFrame.web.styles';
import usePatientFrame from './usePatientFrame';

/**
 * PatientFrame component for Web
 * @param {Object} props - PatientFrame props
 * @param {React.ReactNode} props.children - Main content
 * @param {React.ReactNode} props.header - Header slot
 * @param {React.ReactNode} props.footer - Footer slot
 * @param {React.ReactNode} props.sidebar - Sidebar slot
 * @param {React.ReactNode} props.breadcrumbs - Breadcrumbs slot
 * @param {React.ReactNode} props.overlay - Overlay slot
 * @param {React.ReactNode} props.banner - Banner slot
 * @param {React.ReactNode} props.notices - Notices slot
 * @param {string} props.accessibilityLabel - Accessibility label
 * @param {string} props.testID - Test identifier
 * @param {string} props.className - Additional CSS class
 */
const PatientFrameWeb = ({
  children,
  header,
  footer,
  sidebar,
  breadcrumbs,
  overlay,
  banner,
  notices,
  accessibilityLabel,
  testID,
  className,
}) => {
  const { t } = useI18n();
  const { hasBanner, hasBreadcrumbs, hasFooter, hasHeader, hasOverlay, hasSidebar } = usePatientFrame({
    header,
    footer,
    sidebar,
    breadcrumbs,
    overlay,
    banner,
  });

  return (
    <StyledContainer
      className={className}
      testID={testID}
      role="main"
      aria-label={accessibilityLabel || t('navigation.mainNavigation')}
    >
      <StyledSkipLink href="#patient-main-content">
        {t('navigation.skipToMainContent')}
      </StyledSkipLink>
      {hasHeader && (
        <StyledHeader role="banner">
          {header}
        </StyledHeader>
      )}
      {hasBanner && (
        <StyledBanner role="region">
          {banner}
        </StyledBanner>
      )}
      {hasBreadcrumbs && (
        <StyledBreadcrumbs aria-label={t('navigation.breadcrumbs.label')}>
          {breadcrumbs}
        </StyledBreadcrumbs>
      )}
      <StyledBody>
        {hasSidebar && (
          <StyledSidebar role="complementary" aria-label={t('navigation.sidebar.label')}>
            {sidebar}
          </StyledSidebar>
        )}
        <StyledContent id="patient-main-content" hasSidebar={hasSidebar}>
          {children}
        </StyledContent>
      </StyledBody>
      {hasFooter && (
        <StyledFooter role="contentinfo">
          {footer}
        </StyledFooter>
      )}
      {notices}
      {hasOverlay && <StyledOverlay>{overlay}</StyledOverlay>}
    </StyledContainer>
  );
};

export default PatientFrameWeb;
