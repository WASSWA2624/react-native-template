/**
 * AuthLayout Component - Web
 * Authentication layout for Web platform
 * File: AuthLayout.web.jsx
 */

import React from 'react';
import {
  StyledBanner,
  StyledContainer,
  StyledCard,
  StyledBranding,
  StyledContent,
  StyledHelpLinks,
} from './AuthLayout.web.styles';

/**
 * AuthLayout component for Web
 * @param {Object} props - AuthLayout props
 * @param {React.ReactNode} props.children - Auth form content
 * @param {React.ReactNode} props.branding - Branding/logo area
 * @param {React.ReactNode} props.helpLinks - Help/forgot password links
 * @param {React.ReactNode} props.banner - Optional banner slot (e.g. ShellBanners)
 * @param {string} props.accessibilityLabel - Accessibility label
 * @param {string} props.testID - Test identifier
 * @param {string} props.className - Additional CSS class
 */
const AuthLayoutWeb = ({
  children,
  branding,
  helpLinks,
  banner,
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
      {banner ? <StyledBanner role="region">{banner}</StyledBanner> : null}
      <StyledCard>
        {branding && (
          <StyledBranding>
            {branding}
          </StyledBranding>
        )}
        <StyledContent>
          {children}
        </StyledContent>
        {helpLinks && (
          <StyledHelpLinks>
            {helpLinks}
          </StyledHelpLinks>
        )}
      </StyledCard>
    </StyledContainer>
  );
};

export default AuthLayoutWeb;

