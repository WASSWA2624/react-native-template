/**
 * RolePermissionDetailScreen - Web
 * File: RolePermissionDetailScreen.web.jsx
 */
import React from 'react';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useRolePermissionDetailScreen from './useRolePermissionDetailScreen';

const RolePermissionDetailScreenWeb = () => {
  const { t } = useI18n();
  useRolePermissionDetailScreen();

  return <Text testID="rolePermission-detail">{t('rolePermission.detail.title')}</Text>;
};

export default RolePermissionDetailScreenWeb;
