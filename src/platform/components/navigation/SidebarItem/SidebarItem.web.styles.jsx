import styled from 'styled-components';

export const Row = styled.a.withConfig({
  displayName: 'Row',
  componentId: 'Row',
  shouldForwardProp: (prop) => !['$collapsed', '$active', '$level'].includes(prop),
})`
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'flex-start')};
  min-height: 44px;
  padding: ${({ theme, $collapsed, $level = 0 }) =>
    $collapsed ? `${theme.spacing.xs}px` : `${theme.spacing.xs}px ${theme.spacing.sm + $level * theme.spacing.sm}px`};
  border-radius: ${({ theme }) => theme.radius?.sm ?? 4}px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.text.primary)};
  background-color: ${({ theme, $active }) => ($active ? theme.colors.background.secondary : 'transparent')};
  font-weight: ${({ theme, $active }) => ($active ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.normal)};
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: ${({ theme, $active }) => ($active ? theme.colors.background.secondary : theme.colors.background.tertiary)};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const IconWrapper = styled.span.withConfig({
  displayName: 'IconWrapper',
  componentId: 'IconWrapper',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: inherit;
`;

export const Label = styled.span.withConfig({
  displayName: 'Label',
  componentId: 'Label',
  shouldForwardProp: (prop) => prop !== '$collapsed' && prop !== '$active',
})`
  margin-left: ${({ theme }) => theme.spacing.sm}px;
  flex: 1;
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  font-weight: ${({ theme, $active }) => ($active ? theme.typography.fontWeight.medium : theme.typography.fontWeight.normal)};
  color: inherit;
  display: ${({ $collapsed }) => ($collapsed ? 'none' : 'inline')};
  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet ?? 768}px) {
    display: inline;
  }
`;

export const ExpandButton = styled.button.withConfig({
  displayName: 'ExpandButton',
  componentId: 'ExpandButton',
  shouldForwardProp: (prop) => prop !== '$expanded',
})`
  margin-left: auto;
  padding: ${({ theme }) => theme.spacing.xs}px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  transform: ${({ $expanded }) => ($expanded ? 'rotate(0deg)' : 'rotate(-90deg)')};
  transition: transform 0.2s ease;
  line-height: 1;
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;
