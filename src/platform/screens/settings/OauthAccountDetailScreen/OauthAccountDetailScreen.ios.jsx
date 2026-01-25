/**
 * OauthAccountDetailScreen - iOS
 * File: OauthAccountDetailScreen.ios.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useOauthAccountDetailScreen from './useOauthAccountDetailScreen';

const OauthAccountDetailScreenIos = () => {
  const { t } = useI18n();
  useOauthAccountDetailScreen();

  return <Text testID="oauthAccount-detail">{t('oauthAccount.detail.title')}</Text>;
};

export default OauthAccountDetailScreenIos;
