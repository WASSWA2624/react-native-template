/**
 * AppLogo Component - Web
 * Theme-aware logo (light/dark) from public.
 * File: AppLogo.web.jsx
 */
import React from 'react';
import { useTheme } from 'styled-components';
import { StyledLogoImage } from './AppLogo.web.styles';
import useAppLogo from './useAppLogo';
import { SIZES } from './types';
import { PUBLIC_LOGO_LIGHT, PUBLIC_LOGO_DARK } from '@config/app-identity';

/**
 * @param {Object} props
 * @param {string} [props.size]
 * @param {string} [props.accessibilityLabel]
 * @param {string} [props.testID]
 * @param {string} [props.className]
 */
const AppLogoWeb = ({
  size = SIZES.MD,
  accessibilityLabel,
  testID,
  className,
}) => {
  const theme = useTheme();
  const { width, height } = useAppLogo({ size });
  const src = theme?.mode === 'dark' ? PUBLIC_LOGO_DARK : PUBLIC_LOGO_LIGHT;
  return (
    <StyledLogoImage
      src={src}
      alt={accessibilityLabel ?? ''}
      $width={width}
      $height={height}
      role="img"
      aria-label={accessibilityLabel ?? undefined}
      data-testid={testID}
      className={className}
    />
  );
};

export default AppLogoWeb;
