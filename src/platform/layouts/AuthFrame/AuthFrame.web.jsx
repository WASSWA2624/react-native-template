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
  accessibilityLabel,
  testID,
  className,
}) => {
  return (
    <StyledContainer
      className={className}
      testID={testID}
      role="main"
      aria-label={accessibilityLabel}
    >
      <StyledCard>
        {header && <StyledHeader>{header}</StyledHeader>}
        <StyledContent>{children}</StyledContent>
        {footer && <StyledFooter>{footer}</StyledFooter>}
      </StyledCard>
      {banner && <StyledBanner>{banner}</StyledBanner>}
      {notices ? <StyledNotices>{notices}</StyledNotices> : null}
      {overlay && <StyledOverlay>{overlay}</StyledOverlay>}
    </StyledContainer>
  );
};

export default AuthFrameWeb;
