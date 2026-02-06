/**
 * AppLogo Android Styles
 * File: AppLogo.android.styles.jsx
 */
import styled from 'styled-components/native';
import { Image } from 'react-native';

export const StyledLogoImage = styled(Image).withConfig({
  displayName: 'StyledLogoImage',
  componentId: 'StyledLogoImage',
  shouldForwardProp: (prop) => prop !== '$width' && prop !== '$height',
})`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
`;
