/**
 * UserRoleDetailScreen - Web
 * File: UserRoleDetailScreen.web.jsx
 */
import React from 'react';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useUserRoleDetailScreen from './useUserRoleDetailScreen';

const UserRoleDetailScreenWeb = () => {
  const { t } = useI18n();
  useUserRoleDetailScreen();

  return <Text testID="userRole-detail">{t('userRole.detail.title')}</Text>;
};

export default UserRoleDetailScreenWeb;
