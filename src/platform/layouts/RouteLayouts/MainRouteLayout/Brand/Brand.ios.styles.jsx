/**
 * Brand Styles - iOS
 * File: Brand/Brand.ios.styles.jsx
 */
import styled from 'styled-components/native';
import { View } from 'react-native';

const StyledBrand = styled(View).withConfig({
  displayName: 'StyledBrand',
  componentId: 'StyledBrand',
})`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}px;
  min-width: 0;
  flex: 1;
`;

export { StyledBrand };
