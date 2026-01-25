/**
 * ApiKeyPermissionDetailScreen - Android
 * File: ApiKeyPermissionDetailScreen.android.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useApiKeyPermissionDetailScreen from './useApiKeyPermissionDetailScreen';

const ApiKeyPermissionDetailScreenAndroid = () => {
  const { t } = useI18n();
  useApiKeyPermissionDetailScreen();

  return <Text testID="apiKeyPermission-detail">{t('apiKeyPermission.detail.title')}</Text>;
};

export default ApiKeyPermissionDetailScreenAndroid;
