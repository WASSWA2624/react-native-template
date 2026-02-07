/**
 * HamburgerIcon Styles - iOS
 * File: HamburgerIcon/HamburgerIcon.ios.styles.jsx
 */
import styled from 'styled-components/native';
import { View } from 'react-native';

const StyledHamburgerIcon = styled(View).withConfig({
  displayName: 'StyledHamburgerIcon',
  componentId: 'StyledHamburgerIcon',
})`
  width: 16px;
  height: 14px;
  justify-content: space-between;
`;

const StyledHamburgerLine = styled(View).withConfig({
  displayName: 'StyledHamburgerLine',
  componentId: 'StyledHamburgerLine',
})`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.radius?.full ?? 9999}px;
`;

export { StyledHamburgerIcon, StyledHamburgerLine };
