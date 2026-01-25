/**
 * RoleDetailScreen - Web
 * File: RoleDetailScreen.web.jsx
 */
import React from 'react';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useRoleDetailScreen from './useRoleDetailScreen';

const RoleDetailScreenWeb = () => {
  const { t } = useI18n();
  useRoleDetailScreen();

  return <Text testID="role-detail">{t('role.detail.title')}</Text>;
};

export default RoleDetailScreenWeb;
