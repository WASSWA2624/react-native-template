/**
 * PatientFrame Web Styles
 * Styled-components for Web platform
 * File: PatientFrame.web.styles.jsx
 */

import styled from 'styled-components';

const StyledContainer = styled.div.withConfig({
  displayName: 'StyledContainer',
  componentId: 'StyledContainer',
  shouldForwardProp: (prop) => prop !== 'testID',
}).attrs(({ testID }) => ({
  'data-testid': testID,
}))`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

const StyledHeader = styled.header.withConfig({
  displayName: 'StyledHeader',
  componentId: 'StyledHeader',
})`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.tertiary};
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  min-height: ${({ theme }) => theme.spacing.sm * 7}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const StyledBanner = styled.section.withConfig({
  displayName: 'StyledBanner',
  componentId: 'StyledBanner',
})`
  width: 100%;
`;

const StyledBreadcrumbs = styled.nav.withConfig({
  displayName: 'StyledBreadcrumbs',
  componentId: 'StyledBreadcrumbs',
})`
  padding: ${({ theme }) => theme.spacing.xs}px ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.tertiary};
`;

const StyledBody = styled.div.withConfig({
  displayName: 'StyledBody',
  componentId: 'StyledBody',
})`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const StyledSidebar = styled.aside.withConfig({
  displayName: 'StyledSidebar',
  componentId: 'StyledSidebar',
})`
  display: none;
  width: ${({ theme }) => theme.spacing.md * 13}px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-right: 1px solid ${({ theme }) => theme.colors.background.tertiary};
  padding: ${({ theme }) => theme.spacing.md}px;
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: block;
  }
`;

const StyledContent = styled.main.withConfig({
  displayName: 'StyledContent',
  componentId: 'StyledContent',
})`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md}px;
  max-width: ${({ theme, hasSidebar }) =>
    hasSidebar ? `calc(100% - ${theme.spacing.md * 13}px)` : `${theme.spacing.md * 70}px`};
  margin: 0 auto;
  width: 100%;
`;

const StyledFooter = styled.footer.withConfig({
  displayName: 'StyledFooter',
  componentId: 'StyledFooter',
})`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.background.tertiary};
  padding: ${({ theme }) => theme.spacing.md}px;
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

const StyledSkipLink = styled.a.withConfig({
  displayName: 'StyledSkipLink',
  componentId: 'StyledSkipLink',
})`
  position: absolute;
  top: ${({ theme }) => -theme.spacing.xl - theme.spacing.sm}px;
  left: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  padding: ${({ theme }) => theme.spacing.xs}px;
  text-decoration: none;
  z-index: 6;

  &:focus {
    top: 0;
  }
`;

export {
  StyledBody,
  StyledBanner,
  StyledBreadcrumbs,
  StyledContainer,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledOverlay,
  StyledSidebar,
  StyledSkipLink,
};
