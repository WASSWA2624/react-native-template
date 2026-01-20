/**
 * AuthFrame iOS Styles
 * Styled-components for iOS platform
 * File: AuthFrame.ios.styles.jsx
 */

import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

const StyledContainer = styled.View.withConfig({
  displayName: 'StyledContainer',
  componentId: 'StyledContainer',
})`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

const StyledScrollView = styled(ScrollView).withConfig({
  displayName: 'StyledScrollView',
  componentId: 'StyledScrollView',
}).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
})`
  flex: 1;
`;

const StyledCard = styled.View.withConfig({
  displayName: 'StyledCard',
  componentId: 'StyledCard',
})`
  margin-horizontal: ${({ theme }) => theme.spacing.lg}px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.radius.lg}px;
  padding: ${({ theme }) => theme.spacing.xl}px;
`;

const StyledHeader = styled.View.withConfig({
  displayName: 'StyledHeader',
  componentId: 'StyledHeader',
})`
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

const StyledContent = styled.View.withConfig({
  displayName: 'StyledContent',
  componentId: 'StyledContent',
})`
  width: 100%;
`;

const StyledFooter = styled.View.withConfig({
  displayName: 'StyledFooter',
  componentId: 'StyledFooter',
})`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
`;

const StyledBanner = styled.View.withConfig({
  displayName: 'StyledBanner',
  componentId: 'StyledBanner',
})`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md}px;
  left: ${({ theme }) => theme.spacing.md}px;
  right: ${({ theme }) => theme.spacing.md}px;
  z-index: 3;
`;

const StyledNotices = styled.View.withConfig({
  displayName: 'StyledNotices',
  componentId: 'StyledNotices',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
`;

const StyledOverlay = styled.View.withConfig({
  displayName: 'StyledOverlay',
  componentId: 'StyledOverlay',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.overlay.backdrop};
`;

export {
  StyledBanner,
  StyledCard,
  StyledContainer,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledNotices,
  StyledOverlay,
  StyledScrollView,
};
