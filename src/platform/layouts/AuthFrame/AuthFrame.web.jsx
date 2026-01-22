/**
 * AuthFrame Component - Web
 * Authentication frame with slots for header, footer, and overlays
 * File: AuthFrame.web.jsx
 */

import React from 'react';
import {
  StyledBanner,
  StyledCard,
  StyledContainer,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledNotices,
  StyledOverlay,
} from './AuthFrame.web.styles';

/**
 * AuthFrame component for Web
 * @param {Object} props - AuthFrame props
 * @param {React.ReactNode} props.children - Main content
 * @param {React.ReactNode} props.header - Header slot
 * @param {React.ReactNode} props.footer - Footer slot
 * @param {React.ReactNode} props.overlay - Overlay slot
 * @param {React.ReactNode} props.banner - Banner slot
 * @param {React.ReactNode} props.notices - Notices slot
 * @param {boolean} props.fullWidth - Enable full-width layout (removes padding and max-width constraints)
 * @param {string} props.accessibilityLabel - Accessibility label
 * @param {string} props.testID - Test identifier
 * @param {string} props.className - Additional CSS class
 */
const AuthFrameWeb = ({
  children,
  header,
  footer,
  overlay,
  banner,
  notices,
  fullWidth = false,
  accessibilityLabel,
  testID,
  className,
}) => {
  // In full-width mode, render children directly without card wrapper
  // Header and footer are hidden as they're not needed for two-column layout
  if (fullWidth) {
    return (
      <StyledContainer
        className={className}
        testID={testID}
        role="main"
        aria-label={accessibilityLabel}
        $fullWidth={fullWidth}
      >
        <StyledContent $fullWidth={fullWidth}>{children}</StyledContent>
        {banner && <StyledBanner $fullWidth={fullWidth}>{banner}</StyledBanner>}
        {notices ? <StyledNotices>{notices}</StyledNotices> : null}
        {overlay && <StyledOverlay>{overlay}</StyledOverlay>}
      </StyledContainer>
    );
  }

  // Default card-based layout
  return (
    <StyledContainer
      className={className}
      testID={testID}
      role="main"
      aria-label={accessibilityLabel}
      $fullWidth={fullWidth}
    >
      <StyledCard $fullWidth={fullWidth}>
        {header && <StyledHeader>{header}</StyledHeader>}
        <StyledContent>{children}</StyledContent>
        {footer && <StyledFooter>{footer}</StyledFooter>}
      </StyledCard>
      {banner && <StyledBanner $fullWidth={fullWidth}>{banner}</StyledBanner>}
      {notices ? <StyledNotices>{notices}</StyledNotices> : null}
      {overlay && <StyledOverlay>{overlay}</StyledOverlay>}
    </StyledContainer>
  );
};

export default AuthFrameWeb;
