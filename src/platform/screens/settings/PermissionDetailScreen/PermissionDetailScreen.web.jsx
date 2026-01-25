/**
 * PermissionDetailScreen - Web
 * File: PermissionDetailScreen.web.jsx
 */
import React from 'react';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import usePermissionDetailScreen from './usePermissionDetailScreen';

const PermissionDetailScreenWeb = () => {
  const { t } = useI18n();
  usePermissionDetailScreen();

  return <Text testID="permission-detail">{t('permission.detail.title')}</Text>;
};

export default PermissionDetailScreenWeb;
