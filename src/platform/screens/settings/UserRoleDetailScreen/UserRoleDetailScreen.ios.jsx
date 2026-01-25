/**
 * UserRoleDetailScreen - iOS
 * File: UserRoleDetailScreen.ios.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useUserRoleDetailScreen from './useUserRoleDetailScreen';

const UserRoleDetailScreenIos = () => {
  const { t } = useI18n();
  useUserRoleDetailScreen();

  return <Text testID="userRole-detail">{t('userRole.detail.title')}</Text>;
};

export default UserRoleDetailScreenIos;
