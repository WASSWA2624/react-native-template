/**
 * UserProfileDetailScreen - Web
 * File: UserProfileDetailScreen.web.jsx
 */
import React from 'react';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useUserProfileDetailScreen from './useUserProfileDetailScreen';

const UserProfileDetailScreenWeb = () => {
  const { t } = useI18n();
  useUserProfileDetailScreen();

  return <Text testID="userProfile-detail">{t('userProfile.detail.title')}</Text>;
};

export default UserProfileDetailScreenWeb;
