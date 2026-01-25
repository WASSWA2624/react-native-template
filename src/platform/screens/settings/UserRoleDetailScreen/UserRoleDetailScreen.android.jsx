/**
 * UserRoleDetailScreen - Android
 * File: UserRoleDetailScreen.android.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useUserRoleDetailScreen from './useUserRoleDetailScreen';

const UserRoleDetailScreenAndroid = () => {
  const { t } = useI18n();
  useUserRoleDetailScreen();

  return <Text testID="userRole-detail">{t('userRole.detail.title')}</Text>;
};

export default UserRoleDetailScreenAndroid;
