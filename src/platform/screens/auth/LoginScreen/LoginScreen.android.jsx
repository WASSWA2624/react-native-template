/**
 * LoginScreen Component - Android
 * Authentication login screen for Android platform
 * File: LoginScreen.android.jsx
 */
import React from 'react';
import { AuthFormLayout, Button, ErrorState, OfflineState, PasswordField, Stack, TextField } from '@platform/components';
import { useI18n } from '@hooks';
import { StyledActions, StyledForm, StyledFooter, StyledLinkRow, StyledLinkSeparator } from './LoginScreen.android.styles';
import useLoginScreen from './useLoginScreen';

/**
 * LoginScreen component for Android
 */
const LoginScreenAndroid = () => {
  const { t } = useI18n();
  const {
    identifier,
    password,
    errorMessage,
    isLoading,
    isOffline,
    canSubmit,
    isBiometricAvailable,
    isBiometricChecking,
    handleSubmit,
    handleChangeIdentifier,
    handleChangePassword,
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
          {t('auth.login.button')}
        </Button>
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

  const footerSlot = (
    <StyledFooter>
      <StyledLinkRow>
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
        {canAccessRegister && (
          <>
            <StyledLinkSeparator>•</StyledLinkSeparator>
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
          </>
        )}
      </StyledLinkRow>
    </StyledFooter>
  );

  return (
    <AuthFormLayout
      title={t('auth.login.title')}
      description={null}
      status={statusSlot}
      actions={actionSlot}
      footer={footerSlot}
      accessibilityLabel={t('auth.login.title')}
      testID="login-screen"
      titleTestID="login-title"
      descriptionTestID="login-description"
    >
      <StyledForm>
        <Stack spacing="xs">
          <TextField
            label={t('auth.login.fields.email.label')}
            placeholder={t('auth.login.fields.email.placeholder')}
            value={identifier}
            onChangeText={handleChangeIdentifier}
            type="text"
            autoCapitalize="none"
            autoComplete="username"
            accessibilityLabel={t('auth.login.fields.email.label')}
            accessibilityHint={t('auth.login.fields.email.hint')}
            testID="login-identifier"
          />
          <PasswordField
            label={t('auth.login.fields.password.label')}
            placeholder={t('auth.login.fields.password.placeholder')}
            value={password}
            onChangeText={handleChangePassword}
            showStrengthIndicator={false}
            autoComplete="current-password"
            accessibilityLabel={t('auth.login.fields.password.label')}
            accessibilityHint={t('auth.login.fields.password.hint')}
            testID="login-password"
          />
        </Stack>
      </StyledForm>
    </AuthFormLayout>
  );
};

export default LoginScreenAndroid;
