/**
 * PermissionDetailScreen - iOS
 * File: PermissionDetailScreen.ios.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import usePermissionDetailScreen from './usePermissionDetailScreen';

const PermissionDetailScreenIos = () => {
  const { t } = useI18n();
  usePermissionDetailScreen();

  return <Text testID="permission-detail">{t('permission.detail.title')}</Text>;
};

export default PermissionDetailScreenIos;
