/**
 * LoginScreen iOS Styles
 * Styled-components for iOS platform
 * File: LoginScreen.ios.styles.jsx
 */
import styled from 'styled-components/native';

const StyledForm = styled.View.withConfig({
  displayName: 'StyledForm',
  componentId: 'StyledForm',
})`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

const StyledActions = styled.View.withConfig({
  displayName: 'StyledActions',
  componentId: 'StyledActions',
})`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

const StyledFooter = styled.View.withConfig({
  displayName: 'StyledFooter',
  componentId: 'StyledFooter',
})`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  padding-top: ${({ theme }) => theme.spacing.sm}px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.background.tertiary};
`;

const StyledLinkRow = styled.View.withConfig({
  displayName: 'StyledLinkRow',
  componentId: 'StyledLinkRow',
})`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledLinkSeparator = styled.Text.withConfig({
  displayName: 'StyledLinkSeparator',
  componentId: 'StyledLinkSeparator',
})`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  padding: 0 ${({ theme }) => theme.spacing.xs}px;
`;

export { StyledActions, StyledForm, StyledFooter, StyledLinkRow, StyledLinkSeparator };

