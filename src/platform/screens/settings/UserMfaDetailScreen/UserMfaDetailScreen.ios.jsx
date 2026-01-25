/**
 * UserMfaDetailScreen - iOS
 * File: UserMfaDetailScreen.ios.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useUserMfaDetailScreen from './useUserMfaDetailScreen';

const UserMfaDetailScreenIos = () => {
  const { t } = useI18n();
  useUserMfaDetailScreen();

  return <Text testID="userMfa-detail">{t('userMfa.detail.title')}</Text>;
};

export default UserMfaDetailScreenIos;
