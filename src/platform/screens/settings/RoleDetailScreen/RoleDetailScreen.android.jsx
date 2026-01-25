/**
 * RoleDetailScreen - Android
 * File: RoleDetailScreen.android.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useRoleDetailScreen from './useRoleDetailScreen';

const RoleDetailScreenAndroid = () => {
  const { t } = useI18n();
  useRoleDetailScreen();

  return <Text testID="role-detail">{t('role.detail.title')}</Text>;
};

export default RoleDetailScreenAndroid;
