/**
 * OauthAccountDetailScreen - Web
 * File: OauthAccountDetailScreen.web.jsx
 */
import React from 'react';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useOauthAccountDetailScreen from './useOauthAccountDetailScreen';

const OauthAccountDetailScreenWeb = () => {
  const { t } = useI18n();
  useOauthAccountDetailScreen();

  return <Text testID="oauthAccount-detail">{t('oauthAccount.detail.title')}</Text>;
};

export default OauthAccountDetailScreenWeb;
