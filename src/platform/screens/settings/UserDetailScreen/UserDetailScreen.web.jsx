/**
 * UserDetailScreen - Web
 * File: UserDetailScreen.web.jsx
 */
import React from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  EmptyState,
  ErrorState,
  LoadingSpinner,
  OfflineState,
  Text,
} from '@platform/components';
import { useI18n } from '@hooks';
import {
  StyledContainer,
  StyledContent,
  StyledSection,
  StyledActions,
} from './UserDetailScreen.web.styles';
import useUserDetailScreen from './useUserDetailScreen';

const UserDetailScreenWeb = () => {
  const { t } = useI18n();
  const {
    user,
    isLoading,
    hasError,
    errorMessage,
    isOffline,
    onRetry,
    onBack,
    onEdit,
    onDelete,
  } = useUserDetailScreen();

  if (isLoading) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <LoadingSpinner
              accessibilityLabel={t('common.loading')}
              testID="user-detail-loading"
            />
          </StyledContent>
        </StyledContainer>
      </ScrollView>
    );
  }

  if (isOffline) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <OfflineState
              action={
                <Button onPress={onRetry} accessibilityLabel={t('common.retry')}>
                  {t('common.retry')}
                </Button>
              }
              testID="user-detail-offline"
            />
          </StyledContent>
        </StyledContainer>
      </ScrollView>
    );
  }

  if (hasError) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <ErrorState
              title={t('user.detail.errorTitle')}
              description={errorMessage}
              action={
                <Button onPress={onRetry} accessibilityLabel={t('common.retry')}>
                  {t('common.retry')}
                </Button>
              }
              testID="user-detail-error"
            />
          </StyledContent>
        </StyledContainer>
      </ScrollView>
    );
  }

  if (!user) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <EmptyState
              title={t('user.detail.notFoundTitle')}
              description={t('user.detail.notFoundMessage')}
              testID="user-detail-not-found"
            />
            <StyledActions>
              <Button
                variant="primary"
                onPress={onBack}
                accessibilityLabel={t('common.back')}
                testID="user-detail-back"
              >
                {t('common.back')}
              </Button>
            </StyledActions>
          </StyledContent>
        </StyledContainer>
      </ScrollView>
    );
  }

  const createdAt = user.created_at
    ? new Date(user.created_at).toLocaleString()
    : '';
  const updatedAt = user.updated_at
    ? new Date(user.updated_at).toLocaleString()
    : '';
  const email = user?.email ?? '';
  const phone = user?.phone ?? '';
  const status = user?.status ?? '';

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <Text
            variant="h1"
            accessibilityRole="header"
            testID="user-detail-title"
          >
            {t('user.detail.title')}
          </Text>
          <StyledSection>
            <Text variant="body" testID="user-detail-id">
              {t('user.detail.idLabel')}: {user.id}
            </Text>
          </StyledSection>
          {email ? (
            <StyledSection>
              <Text variant="body" testID="user-detail-email">
                {t('user.detail.emailLabel')}: {email}
              </Text>
            </StyledSection>
          ) : null}
          {phone ? (
            <StyledSection>
              <Text variant="body" testID="user-detail-phone">
                {t('user.detail.phoneLabel')}: {phone}
              </Text>
            </StyledSection>
          ) : null}
          {status ? (
            <StyledSection>
              <Text variant="body" testID="user-detail-status">
                {t('user.detail.statusLabel')}: {status}
              </Text>
            </StyledSection>
          ) : null}
          {createdAt ? (
            <StyledSection>
              <Text variant="body" testID="user-detail-created">
                {t('user.detail.createdLabel')}: {createdAt}
              </Text>
            </StyledSection>
          ) : null}
          {updatedAt ? (
            <StyledSection>
              <Text variant="body" testID="user-detail-updated">
                {t('user.detail.updatedLabel')}: {updatedAt}
              </Text>
            </StyledSection>
          ) : null}
          <StyledActions>
            <Button
              variant="ghost"
              onPress={onBack}
              accessibilityLabel={t('common.back')}
              accessibilityHint={t('user.detail.backHint')}
              testID="user-detail-back"
            >
              {t('common.back')}
            </Button>
            {onEdit && (
              <Button
                variant="secondary"
                onPress={onEdit}
                accessibilityLabel={t('user.detail.edit')}
                accessibilityHint={t('user.detail.editHint')}
                testID="user-detail-edit"
              >
                {t('user.detail.edit')}
              </Button>
            )}
            <Button
              variant="primary"
              onPress={onDelete}
              accessibilityLabel={t('user.detail.delete')}
              accessibilityHint={t('user.detail.deleteHint')}
              testID="user-detail-delete"
            >
              {t('common.remove')}
            </Button>
          </StyledActions>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default UserDetailScreenWeb;
