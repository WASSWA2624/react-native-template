/**
 * UserMfaDetailScreen - Web
 * File: UserMfaDetailScreen.web.jsx
 */
import React from 'react';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useUserMfaDetailScreen from './useUserMfaDetailScreen';

const UserMfaDetailScreenWeb = () => {
  const { t } = useI18n();
  useUserMfaDetailScreen();

  return <Text testID="userMfa-detail">{t('userMfa.detail.title')}</Text>;
};

export default UserMfaDetailScreenWeb;
