/**
 * Brand - Android
 * App name + logo for header (matches mobile web)
 * File: Brand/Brand.android.jsx
 */
import React from 'react';
import { AppLogo, AppLogoSizes } from '@platform/components';
import Text from '@platform/components/display/Text';
import { StyledBrand } from './Brand.android.styles';

export default function Brand({ appName, appShortName }) {
  return (
    <StyledBrand>
      <AppLogo size={AppLogoSizes.SM} accessibilityLabel={appName} />
      <Text variant="body" color="text.primary" numberOfLines={1}>
        {appShortName ?? appName}
      </Text>
    </StyledBrand>
  );
}
