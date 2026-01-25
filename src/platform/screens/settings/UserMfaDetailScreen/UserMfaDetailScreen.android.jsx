/**
 * UserMfaDetailScreen - Android
 * File: UserMfaDetailScreen.android.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useUserMfaDetailScreen from './useUserMfaDetailScreen';

const UserMfaDetailScreenAndroid = () => {
  const { t } = useI18n();
  useUserMfaDetailScreen();

  return <Text testID="userMfa-detail">{t('userMfa.detail.title')}</Text>;
};

export default UserMfaDetailScreenAndroid;
