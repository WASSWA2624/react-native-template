/**
 * ApiKeyPermissionDetailScreen - iOS
 * File: ApiKeyPermissionDetailScreen.ios.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useApiKeyPermissionDetailScreen from './useApiKeyPermissionDetailScreen';

const ApiKeyPermissionDetailScreenIos = () => {
  const { t } = useI18n();
  useApiKeyPermissionDetailScreen();

  return <Text testID="apiKeyPermission-detail">{t('apiKeyPermission.detail.title')}</Text>;
};

export default ApiKeyPermissionDetailScreenIos;
