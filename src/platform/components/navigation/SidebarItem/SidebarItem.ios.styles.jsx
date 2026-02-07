/**
 * SidebarItem Styles - iOS
 * Theme tokens only; 44px min touch target (accessibility.mdc).
 */
import styled from 'styled-components/native';
import { TouchableOpacity, Text, View } from 'react-native';

export const Row = styled(TouchableOpacity).withConfig({
  displayName: 'Row',
  componentId: 'Row',
  shouldForwardProp: (prop) => prop !== '$active' && prop !== '$level',
})`
  flex-direction: row;
  align-items: center;
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  padding-left: ${({ theme, $level = 0 }) => theme.spacing.md + $level * theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.radius?.sm ?? 4}px;
  background-color: ${({ theme, $active }) => ($active ? theme.colors.background.secondary : 'transparent')};
`;

export const IconBox = styled(View).withConfig({
  displayName: 'IconBox',
  componentId: 'SidebarItem_IconBox',
})`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled(Text).withConfig({
  displayName: 'Label',
  componentId: 'Label',
  shouldForwardProp: (prop) => prop !== '$active',
})`
  margin-left: ${({ theme }) => theme.spacing.sm}px;
  flex: 1;
  font-size: ${({ theme }) => theme.typography?.fontSize?.sm ?? 14}px;
  font-weight: ${({ theme, $active }) => ($active ? theme.typography?.fontWeight?.semibold : theme.typography?.fontWeight?.normal)};
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.text.primary)};
`;

export const ExpandTouch = styled(TouchableOpacity).withConfig({
  displayName: 'ExpandTouch',
  componentId: 'ExpandTouch',
})`
  padding: ${({ theme }) => theme.spacing.xs}px;
  min-width: 44px;
  min-height: 44px;
  justify-content: center;
  align-items: center;
`;
