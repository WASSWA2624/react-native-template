/**
 * TabBar Component Styles - Web
 * Styled-components for TabBar web implementation (semantic HTML per theme-design.mdc)
 * File: TabBar.web.styles.jsx
 */
import styled from 'styled-components';

const StyledTabBar = styled.nav.withConfig({
  displayName: 'StyledTabBar',
  componentId: 'StyledTabBar',
})`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.background.tertiary};
  padding: ${({ theme }) => theme.spacing.sm}px 0;
  z-index: 1000;
  box-shadow: ${({ theme }) =>
    theme.shadows?.md
      ? `0 -2px ${theme.shadows.md.shadowRadius * 2}px rgba(0, 0, 0, ${theme.shadows.md.shadowOpacity ?? 0.15})`
      : '0 -2px 8px rgba(0, 0, 0, 0.1)'};

  @media (max-width: 768px) {
    display: flex;
  }
`;

const StyledTabBarContent = styled.div.withConfig({
  displayName: 'StyledTabBarContent',
  componentId: 'StyledTabBarContent',
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
`;

const StyledTabItem = styled.button.withConfig({
  displayName: 'StyledTabItem',
  componentId: 'StyledTabItem',
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm}px;
  min-height: ${({ theme }) => theme.spacing.xxl + theme.spacing.sm}px;
  min-width: ${({ theme }) => theme.spacing.xxl + theme.spacing.sm}px;
  position: relative;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md}px;
  background: transparent;
  cursor: pointer;
  font: inherit;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const StyledTabItemIcon = styled.span.withConfig({
  displayName: 'StyledTabItemIcon',
  componentId: 'StyledTabItemIcon',
})`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.xxl}px;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

const StyledTabItemLabel = styled.span.withConfig({
  displayName: 'StyledTabItemLabel',
  componentId: 'StyledTabItemLabel',
})`
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  font-weight: ${({ theme, active }) =>
    active ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.normal};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.text.tertiary};
  text-align: center;
`;

const StyledTabItemBadge = styled.span.withConfig({
  displayName: 'StyledTabItemBadge',
  componentId: 'StyledTabItemBadge',
})`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xs}px;
  right: ${({ theme }) => theme.spacing.sm}px;
`;

export {
  StyledTabBar,
  StyledTabBarContent,
  StyledTabItem,
  StyledTabItemIcon,
  StyledTabItemLabel,
  StyledTabItemBadge,
};

