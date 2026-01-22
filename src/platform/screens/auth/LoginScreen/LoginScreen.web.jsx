/**
 * LoginScreen Component - Web
 * Authentication login screen for Web platform
 * File: LoginScreen.web.jsx
 */
import React from 'react';
import { AuthFormLayout, Button, Checkbox, ErrorState, Icon, OfflineState, PasswordField, Stack, TextField } from '@platform/components';
import { useI18n } from '@hooks';
import { StyledActions, StyledForm, StyledFooter, StyledLinkRow, StyledLinkSeparator, StyledOptionsRow, StyledLoginButton } from './LoginScreen.web.styles';
import useLoginScreen from './useLoginScreen';

/**
 * LoginScreen component for Web
 */
const LoginScreenWeb = () => {
  const { t } = useI18n();
  const {
    identifier,
    password,
    rememberMe,
    errorMessage,
    isLoading,
    isOffline,
    canSubmit,
    isBiometricAvailable,
    isBiometricChecking,
    handleSubmit,
    handleChangeIdentifier,
    handleChangePassword,
    handleRememberMeChange,
    handleGoToRegister,
    handleGoToForgotPassword,
    handleBiometricLogin,
    canAccessRegister,
  } = useLoginScreen();

  const statusSlot = isOffline ? (
    <OfflineState
      title={t('shell.banners.offline.title')}
      description={t('shell.banners.offline.message')}
      accessibilityLabel={t('shell.banners.offline.accessibilityLabel')}
      testID="login-offline-state"
    />
  ) : errorMessage ? (
    <ErrorState
      title={null}
      description={errorMessage}
      accessibilityLabel={errorMessage}
      testID="login-error-state"
    />
  ) : null;

  const actionSlot = (
    <StyledActions>
      <Stack spacing="sm">
        <StyledLoginButton>
          <Button
            variant="primary"
            size="medium"
            loading={isLoading}
            disabled={!canSubmit}
            onPress={handleSubmit}
            accessibilityLabel={t('auth.login.button')}
            accessibilityHint={t('auth.login.buttonHint')}
            testID="login-button"
          >
            {t('auth.login.button').toUpperCase()}
          </Button>
        </StyledLoginButton>
        {isBiometricAvailable ? (
          <Button
            variant="ghost"
            size="medium"
            loading={isBiometricChecking}
            disabled={isBiometricChecking || isOffline}
            onPress={handleBiometricLogin}
            accessibilityLabel={t('auth.login.biometric.button')}
            accessibilityHint={t('auth.login.biometric.buttonHint')}
            testID="login-biometric"
          >
            {t('auth.login.biometric.button')}
          </Button>
        ) : null}
      </Stack>
    </StyledActions>
  );

  const footerSlot = canAccessRegister ? (
    <StyledFooter>
      <StyledLinkRow>
        <Button
          variant="text"
          size="small"
          onPress={handleGoToRegister}
          accessibilityLabel={t('auth.login.actions.register')}
          accessibilityHint={t('auth.login.actions.registerHint')}
          testID="login-register"
        >
          {t('auth.login.actions.register')}
        </Button>
      </StyledLinkRow>
    </StyledFooter>
  ) : null;

  return (
    <AuthFormLayout
      layout="two-column"
      title={t('auth.login.title')}
      description={null}
      status={statusSlot}
      actions={actionSlot}
      footer={footerSlot}
      welcomeTitle="Welcome to HMS"
      welcomeDescription="Sign in to access your healthcare management system and manage patient records, appointments, and more."
      accessibilityLabel={t('auth.login.title')}
      testID="login-screen"
      titleTestID="login-title"
      descriptionTestID="login-description"
    >
      <StyledForm>
        <Stack spacing="sm">
          <TextField
            label={null}
            placeholder={t('auth.login.fields.email.placeholder')}
            value={identifier}
            onChangeText={handleChangeIdentifier}
            type="text"
            autoCapitalize="none"
            autoComplete="username"
            prefix={
              <Icon
                glyph="👤"
                size="sm"
                tone="muted"
                decorative
              />
            }
            accessibilityLabel={t('auth.login.fields.email.label')}
            accessibilityHint={t('auth.login.fields.email.hint')}
            testID="login-identifier"
          />
          <PasswordField
            label={null}
            placeholder={t('auth.login.fields.password.placeholder')}
            value={password}
            onChangeText={handleChangePassword}
            showStrengthIndicator={false}
            autoComplete="current-password"
            prefix={
              <Icon
                glyph="🔒"
                size="sm"
                tone="muted"
                decorative
              />
            }
            accessibilityLabel={t('auth.login.fields.password.label')}
            accessibilityHint={t('auth.login.fields.password.hint')}
            testID="login-password"
          />
          <StyledOptionsRow>
            <Checkbox
              checked={rememberMe}
              onChange={handleRememberMeChange}
              label="Remember"
              accessibilityLabel="Remember me"
              testID="login-remember-me"
            />
            <Button
              variant="text"
              size="small"
              onPress={handleGoToForgotPassword}
              accessibilityLabel={t('auth.login.actions.forgotPassword')}
              accessibilityHint={t('auth.login.actions.forgotPasswordHint')}
              testID="login-forgot-password"
            >
              {t('auth.login.actions.forgotPassword')}
            </Button>
          </StyledOptionsRow>
        </Stack>
      </StyledForm>
    </AuthFormLayout>
  );
};

export default LoginScreenWeb;
