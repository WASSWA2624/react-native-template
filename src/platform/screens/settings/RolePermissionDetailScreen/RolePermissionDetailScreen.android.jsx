/**
 * RolePermissionDetailScreen - Android
 * File: RolePermissionDetailScreen.android.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useRolePermissionDetailScreen from './useRolePermissionDetailScreen';

const RolePermissionDetailScreenAndroid = () => {
  const { t } = useI18n();
  useRolePermissionDetailScreen();

  return <Text testID="rolePermission-detail">{t('rolePermission.detail.title')}</Text>;
};

export default RolePermissionDetailScreenAndroid;
