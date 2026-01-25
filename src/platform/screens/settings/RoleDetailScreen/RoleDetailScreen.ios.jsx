/**
 * RoleDetailScreen - iOS
 * File: RoleDetailScreen.ios.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useRoleDetailScreen from './useRoleDetailScreen';

const RoleDetailScreenIos = () => {
  const { t } = useI18n();
  useRoleDetailScreen();

  return <Text testID="role-detail">{t('role.detail.title')}</Text>;
};

export default RoleDetailScreenIos;
