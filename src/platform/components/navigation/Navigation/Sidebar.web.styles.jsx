/**
 * Sidebar Component Styles - Web
 * Styled-components for Sidebar web implementation
 * File: Sidebar.web.styles.jsx
 */
import styled from 'styled-components';
import { View, Pressable, Text } from 'react-native';

const NAV_ICON_SIZE = 20;

const StyledSidebar = styled(View).withConfig({
  displayName: 'StyledSidebar',
  componentId: 'StyledSidebar',
})`
  width: ${({ collapsed, theme }) =>
    collapsed ? `${NAV_ICON_SIZE + theme.spacing.xs * 2}px` : '200px'};
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.background.tertiary};
  transition: width 0.2s ease;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
  z-index: 100;
`;

const StyledSidebarContent = styled(View).withConfig({
  displayName: 'StyledSidebarContent',
  componentId: 'StyledSidebarContent',
})`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${({ theme, $collapsed }) =>
    $collapsed ? '0' : `${theme.spacing.xs}px ${theme.spacing.sm}px`};
  gap: ${({ theme }) => theme.spacing.xs}px;
`;

const StyledNavSection = styled(View).withConfig({
  displayName: 'StyledNavSection',
  componentId: 'StyledNavSection',
})`
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

const StyledNavSectionHeader = styled(View).withConfig({
  displayName: 'StyledNavSectionHeader',
  componentId: 'StyledNavSectionHeader',
})`
  padding: ${({ theme }) => theme.spacing.xs}px ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

const StyledNavSectionTitle = styled(Text).withConfig({
  displayName: 'StyledNavSectionTitle',
  componentId: 'StyledNavSectionTitle',
})`
  font-size: ${({ theme }) => theme.typography.fontSize.xs}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StyledNavItem = styled(Pressable).withConfig({
  displayName: 'StyledNavItem',
  componentId: 'StyledNavItem',
})`
  padding: ${({ theme, $collapsed }) =>
    $collapsed ? `${theme.spacing.xs}px` : `${theme.spacing.xs}px ${theme.spacing.sm}px`};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.background.secondary : 'transparent'};
  flex-direction: row;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'flex-start')};
  min-height: 40px;
  padding-left: ${({ theme, level, $collapsed }) =>
    $collapsed ? theme.spacing.xs : theme.spacing.sm + level * theme.spacing.sm}px;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.background.secondary : theme.colors.background.tertiary};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
  }
`;

const StyledNavItemContent = styled(View).withConfig({
  displayName: 'StyledNavItemContent',
  componentId: 'StyledNavItemContent',
})`
  flex-direction: row;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

const StyledNavItemIcon = styled(Text).withConfig({
  displayName: 'StyledNavItemIcon',
  componentId: 'StyledNavItemIcon',
})`
  font-size: 18px;
  min-width: 20px;
  flex-shrink: 0;
  text-align: center;
`;

const StyledNavItemLabelGroup = styled(View).withConfig({
  displayName: 'StyledNavItemLabelGroup',
  componentId: 'StyledNavItemLabelGroup',
})`
  flex: 1;
  flex-direction: row;
  align-items: center;
  min-width: 0;
  gap: ${({ theme }) => theme.spacing.sm}px;
  display: ${({ $collapsed }) => ($collapsed ? 'none' : 'flex')};

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet ?? 768}px) {
    display: flex;
  }
`;

const StyledNavItemLabel = styled(Text).withConfig({
  displayName: 'StyledNavItemLabel',
  componentId: 'StyledNavItemLabel',
})`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  font-weight: ${({ theme, active }) => (active ? '600' : theme.typography.fontWeight.normal)};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.text.primary};
`;

const StyledNavItemBadge = styled(View).withConfig({
  displayName: 'StyledNavItemBadge',
  componentId: 'StyledNavItemBadge',
})`
  margin-left: auto;
`;

const StyledNavItemChildren = styled(View).withConfig({
  displayName: 'StyledNavItemChildren',
  componentId: 'StyledNavItemChildren',
})`
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  margin-left: ${({ theme }) => theme.spacing.sm}px;
`;

const StyledExpandIcon = styled(Text).withConfig({
  displayName: 'StyledExpandIcon',
  componentId: 'StyledExpandIcon',
})`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease;
`;

export {
  StyledSidebar,
  StyledSidebarContent,
  StyledNavSection,
  StyledNavSectionHeader,
  StyledNavSectionTitle,
  StyledNavItem,
  StyledNavItemContent,
  StyledNavItemIcon,
  StyledNavItemLabelGroup,
  StyledNavItemLabel,
  StyledNavItemBadge,
  StyledNavItemChildren,
  StyledExpandIcon,
};


