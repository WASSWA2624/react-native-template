/**
 * LoginScreen Component - Android
 * Minimal login screen for testing P009 layouts
 * File: LoginScreen.android.jsx
 */
import React from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useRouter } from 'expo-router';
import { Button, Text, Container } from '@platform/components';
import { useI18n } from '@hooks';
import { actions as uiActions } from '@store/slices/ui.slice';

/**
 * LoginScreen component for Android
 * Temporary minimal implementation for testing auth flow and layouts
 */
const LoginScreenAndroid = () => {
  const { t } = useI18n();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    // Set authenticated state (minimal auth for Phase 0-7)
    dispatch(uiActions.setAuthenticated(true));
    dispatch(uiActions.setUser({ id: 'test-user', name: 'Test User' }));
    
    // Router will auto-redirect to /home via auth guard
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      accessibilityLabel={t('auth.login.title')}
      testID="login-screen"
    >
      <Container
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
        }}
      >
        <View style={{ maxWidth: 400, width: '100%', alignItems: 'center' }}>
          <Text
            variant="h1"
            align="center"
            style={{ marginBottom: 16 }}
            accessibilityRole="header"
            testID="login-title"
          >
            {t('auth.login.title')}
          </Text>
          <Text
            variant="body"
            align="center"
            style={{ marginBottom: 32 }}
            testID="login-description"
          >
            {t('auth.login.description')}
          </Text>
          <Button
            variant="primary"
            size="large"
            onPress={handleLogin}
            style={{ width: '100%' }}
            accessibilityLabel={t('auth.login.button')}
            accessibilityHint={t('auth.login.buttonHint')}
            testID="login-button"
          >
            {t('auth.login.button')}
          </Button>
        </View>
      </Container>
    </ScrollView>
  );
};

export default LoginScreenAndroid;
