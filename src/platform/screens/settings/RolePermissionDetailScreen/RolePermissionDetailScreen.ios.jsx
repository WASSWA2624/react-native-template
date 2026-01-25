/**
 * RolePermissionDetailScreen - iOS
 * File: RolePermissionDetailScreen.ios.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useRolePermissionDetailScreen from './useRolePermissionDetailScreen';

const RolePermissionDetailScreenIos = () => {
  const { t } = useI18n();
  useRolePermissionDetailScreen();

  return <Text testID="rolePermission-detail">{t('rolePermission.detail.title')}</Text>;
};

export default RolePermissionDetailScreenIos;
