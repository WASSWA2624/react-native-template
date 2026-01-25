/**
 * ApiKeyDetailScreen - Android
 * File: ApiKeyDetailScreen.android.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useApiKeyDetailScreen from './useApiKeyDetailScreen';

const ApiKeyDetailScreenAndroid = () => {
  const { t } = useI18n();
  useApiKeyDetailScreen();

  return <Text testID="apiKey-detail">{t('apiKey.detail.title')}</Text>;
};

export default ApiKeyDetailScreenAndroid;
