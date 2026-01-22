/**
 * LoginScreen Web Styles
 * Styled-components for Web platform
 * File: LoginScreen.web.styles.jsx
 */
import styled from 'styled-components';

const StyledForm = styled.div.withConfig({
  displayName: 'StyledForm',
  componentId: 'StyledForm',
})`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  
  /* Improve visual spacing between form elements */
  > * {
    margin-bottom: ${({ theme }) => theme.spacing.sm}px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  /* Ensure all form field containers have same width */
  /* TextField structure: div (no testID) > div (StyledInputContainer) > input[data-testid*="identifier"] */
  /* PasswordField structure: div[data-testid*="password"] > div (TextField container) > div (StyledInputContainer) > input */
  
  /* Target PasswordField container */
  div[data-testid*="password"] {
    width: 100% !important;
    margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  }
  
  /* Target TextField's StyledInputContainer by going up from input */
  /* Use :has() selector or target parent containers */
  input[data-testid*="identifier"] {
    width: 100% !important;
    box-sizing: border-box !important;
  }
  
  /* Target the actual input container divs (StyledInputContainer) */
  /* TextField: div:has(input[identifier]) > div (the StyledInputContainer) */
  /* PasswordField: div[password] > div (TextField container) > div (StyledInputContainer) */
  div:has(input[data-testid*="identifier"]) > div,
  div[data-testid*="password"] > div > div {
    width: 100% !important;
    min-height: 40px !important;
    height: 40px !important;
    padding: 0 ${({ theme }) => theme.spacing.md}px 0 40px !important;
    border-radius: 20px !important;
    background-color: ${({ theme }) => theme.colors.background.secondary} !important;
    border: none !important;
    font-size: ${({ theme }) => theme.typography.fontSize.sm}px !important;
    box-sizing: border-box !important;
  }
  
  /* Mobile touch optimization - minimum 44px height */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    div:has(input[data-testid*="identifier"]) > div,
    div[data-testid*="password"] > div > div {
      min-height: 44px !important;
      height: 44px !important;
    }
  }
  
  /* Hide labels */
  label {
    display: none !important;
  }
  
  /* Icon positioning - prefix icon for TextField */
  div:has(input[data-testid*="identifier"]) > div > span:first-child {
    position: absolute;
    left: ${({ theme }) => theme.spacing.md}px;
    z-index: 1;
    display: flex;
    align-items: center;
    pointer-events: none;
  }
  
  /* Input text styling - add padding for icon */
  input[data-testid*="identifier"] {
    padding-left: ${({ theme }) => theme.spacing.xl + theme.spacing.xs}px !important;
  }
  
  /* Password field container - ensure prefix is positioned and same width */
  /* PasswordField structure: div[data-testid*="password"] (View/div) > div (TextField StyledContainer) > div (StyledInputContainer) */
  div[data-testid*="password"] {
    width: 100% !important;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  
  /* Ensure TextField container inside PasswordField has proper width */
  div[data-testid*="password"] > div {
    position: relative;
    width: 100% !important;
    display: flex;
    flex-direction: column;
  }
  
  /* Password field input container - ensure proper alignment */
  div[data-testid*="password"] > div > div {
    position: relative !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
  }
  
  /* Password field prefix icon positioning - TextField's prefix is inside StyledInputContainer */
  div[data-testid*="password"] > div > div > span:first-child {
    position: absolute !important;
    left: ${({ theme }) => theme.spacing.md}px !important;
    z-index: 1 !important;
    display: flex !important;
    align-items: center !important;
    pointer-events: none !important;
  }
  
  /* Password field input padding for prefix - ensure same as textfield */
  div[data-testid*="password"] > div > div input {
    padding-left: ${({ theme }) => theme.spacing.xl + theme.spacing.xs}px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    flex: 1 !important;
  }
  
  /* Password field suffix (toggle button) positioning - TextField's suffix is inside StyledInputContainer */
  div[data-testid*="password"] > div > div > span:last-child {
    position: absolute !important;
    right: ${({ theme }) => theme.spacing.sm}px !important;
    z-index: 1 !important;
  }
  
  /* Ensure all inputs have proper width */
  input[data-testid*="identifier"],
  div[data-testid*="password"] > div > div input {
    width: 100% !important;
    box-sizing: border-box !important;
  }
`;

const StyledActions = styled.div.withConfig({
  displayName: 'StyledActions',
  componentId: 'StyledActions',
})`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

const StyledFooter = styled.div.withConfig({
  displayName: 'StyledFooter',
  componentId: 'StyledFooter',
})`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  padding-top: ${({ theme }) => theme.spacing.xs}px;
  border-top: 1px solid ${({ theme }) => theme.colors.background.tertiary};
`;

const StyledLinkRow = styled.div.withConfig({
  displayName: 'StyledLinkRow',
  componentId: 'StyledLinkRow',
})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs}px;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile * 1.5}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs}px;
  }
`;

const StyledLinkSeparator = styled.span.withConfig({
  displayName: 'StyledLinkSeparator',
  componentId: 'StyledLinkSeparator',
})`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  padding: 0 ${({ theme }) => theme.spacing.xs}px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile * 1.5}px) {
    display: none;
  }
`;

const StyledOptionsRow = styled.div.withConfig({
  displayName: 'StyledOptionsRow',
  componentId: 'StyledOptionsRow',
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  gap: ${({ theme }) => theme.spacing.sm}px;
  
  /* Checkbox label styling */
  label {
    font-size: ${({ theme }) => theme.typography.fontSize.xs}px !important;
    color: ${({ theme }) => theme.colors.text.tertiary} !important;
  }
  
  /* Forgot password button styling */
  button {
    font-size: ${({ theme }) => theme.typography.fontSize.xs}px !important;
    color: ${({ theme }) => theme.colors.text.tertiary} !important;
    padding: 0 !important;
    min-width: auto !important;
  }
`;

const StyledLoginButton = styled.div.withConfig({
  displayName: 'StyledLoginButton',
  componentId: 'StyledLoginButton',
})`
  width: 100%;
  display: flex;
  justify-content: center;
  
  /* Style the button inside */
  button[data-testid="login-button"] {
    width: 100% !important;
    max-width: 300px !important;
    height: 38px !important;
    min-height: 38px !important;
    border-radius: 20px !important;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.primary}) !important;
    font-size: 13px !important;
    letter-spacing: 0.5px !important;
    text-transform: uppercase !important;
    font-weight: 600 !important;
    border: none !important;
    padding: 0 !important;
    transition: opacity 0.2s, transform 0.2s !important;
    
    &:hover:not(:disabled) {
      opacity: 0.9 !important;
      transform: scale(1.02) !important;
    }
    
    &:active:not(:disabled) {
      transform: scale(0.98) !important;
    }
    
    &:disabled {
      opacity: 0.6 !important;
    }
  }
  
  /* Mobile touch optimization - minimum 44px height */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    button[data-testid="login-button"] {
      height: 44px !important;
      min-height: 44px !important;
    }
  }
`;

export { StyledActions, StyledForm, StyledFooter, StyledLinkRow, StyledLinkSeparator, StyledOptionsRow, StyledLoginButton };

