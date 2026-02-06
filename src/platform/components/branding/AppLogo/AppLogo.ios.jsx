/**
 * AppLogo Component - iOS
 * Theme-aware logo (light/dark) from assets.
 * File: AppLogo.ios.jsx
 */
import React from 'react';
import { useTheme } from 'styled-components/native';
import { StyledLogoImage } from './AppLogo.ios.styles';
import useAppLogo from './useAppLogo';
import { SIZES } from './types';

const LOGO_LIGHT = require('../../../../../../assets/logo-light.png');
const LOGO_DARK = require('../../../../../../assets/logo-dark.png');

/**
 * @param {Object} props
 * @param {string} [props.size]
 * @param {string} [props.accessibilityLabel]
 * @param {string} [props.testID]
 */
const AppLogoIOS = ({
  size = SIZES.MD,
  accessibilityLabel,
  testID,
}) => {
  const theme = useTheme();
  const { width, height } = useAppLogo({ size });
  const source = theme?.mode === 'dark' ? LOGO_DARK : LOGO_LIGHT;
  return (
    <StyledLogoImage
      source={source}
      resizeMode="contain"
      $width={width}
      $height={height}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
      testID={testID}
    />
  );
};

export default AppLogoIOS;
