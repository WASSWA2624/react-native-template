/**
 * ApiKeyDetailScreen - Web
 * File: ApiKeyDetailScreen.web.jsx
 */
import React from 'react';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useApiKeyDetailScreen from './useApiKeyDetailScreen';

const ApiKeyDetailScreenWeb = () => {
  const { t } = useI18n();
  useApiKeyDetailScreen();

  return <Text testID="apiKey-detail">{t('apiKey.detail.title')}</Text>;
};

export default ApiKeyDetailScreenWeb;
