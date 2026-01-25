/**
 * ApiKeyPermissionDetailScreen - Web
 * File: ApiKeyPermissionDetailScreen.web.jsx
 */
import React from 'react';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useApiKeyPermissionDetailScreen from './useApiKeyPermissionDetailScreen';

const ApiKeyPermissionDetailScreenWeb = () => {
  const { t } = useI18n();
  useApiKeyPermissionDetailScreen();

  return <Text testID="apiKeyPermission-detail">{t('apiKeyPermission.detail.title')}</Text>;
};

export default ApiKeyPermissionDetailScreenWeb;
