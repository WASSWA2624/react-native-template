/**
 * AuthFrame Web Styles
 * Styled-components for Web platform
 * File: AuthFrame.web.styles.jsx
 */

import styled from 'styled-components';

const StyledContainer = styled.main.withConfig({
  displayName: 'StyledContainer',
  componentId: 'StyledContainer',
  shouldForwardProp: (prop) => prop !== 'testID' && !prop.startsWith('$'),
}).attrs(({ testID }) => ({
  'data-testid': testID,
}))`
  min-height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg}px;
  ${({ $fullWidth }) =>
    $fullWidth
      ? `
    padding: 0;
    margin: 0;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    max-width: 100%;
    background-color: transparent;
  `
      : ''}
`;

const StyledCard = styled.section.withConfig({
  displayName: 'StyledCard',
  componentId: 'StyledCard',
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})`
  width: 100%;
  max-width: ${({ theme }) => theme.spacing.md * 25}px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.radius.lg}px;
  padding: ${({ theme }) => theme.spacing.xl}px;
  box-shadow: ${({ theme }) => {
    if (theme.shadows?.md) {
      const shadow = theme.shadows.md;
      return `${shadow.shadowOffset.width}px ${shadow.shadowOffset.height}px ${shadow.shadowRadius * 2}px rgba(0, 0, 0, ${shadow.shadowOpacity})`;
    }
    return 'none';
  }};
  ${({ $fullWidth }) =>
    $fullWidth
      ? `
    max-width: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
  `
      : ''}
`;

const StyledHeader = styled.div.withConfig({
  displayName: 'StyledHeader',
  componentId: 'StyledHeader',
})`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

const StyledContent = styled.div.withConfig({
  displayName: 'StyledContent',
  componentId: 'StyledContent',
})`
  width: 100%;
  ${({ $fullWidth }) =>
    $fullWidth
      ? `
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
  `
      : ''}
`;

const StyledFooter = styled.div.withConfig({
  displayName: 'StyledFooter',
  componentId: 'StyledFooter',
})`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  display: flex;
  align-items: center;
`;

const StyledBanner = styled.div.withConfig({
  displayName: 'StyledBanner',
  componentId: 'StyledBanner',
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md}px;
  left: ${({ theme }) => theme.spacing.md}px;
  right: ${({ theme }) => theme.spacing.md}px;
  z-index: 3;
  ${({ $fullWidth }) =>
    $fullWidth
      ? `
    left: 0;
    right: 0;
    top: 0;
  `
      : ''}
`;

const StyledNotices = styled.div.withConfig({
  displayName: 'StyledNotices',
  componentId: 'StyledNotices',
})`
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
`;

const StyledOverlay = styled.div.withConfig({
  displayName: 'StyledOverlay',
  componentId: 'StyledOverlay',
})`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
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
};
