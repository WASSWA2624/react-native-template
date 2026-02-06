/**
 * AppLogo Web Styles
 * File: AppLogo.web.styles.jsx
 */
import styled from 'styled-components';

export const StyledLogoImage = styled.img.withConfig({
  displayName: 'StyledLogoImage',
  componentId: 'StyledLogoImage',
  shouldForwardProp: (prop) => prop !== '$width' && prop !== '$height',
})`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  object-fit: contain;
  display: block;
`;
