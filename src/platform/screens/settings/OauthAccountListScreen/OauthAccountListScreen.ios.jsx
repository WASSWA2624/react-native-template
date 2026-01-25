/**
 * OauthAccountListScreen - iOS
 * File: OauthAccountListScreen.ios.jsx
 */
import React from 'react';
import { FlatList } from 'react-native';
import {
  Button,
  EmptyState,
  ListItem,
  Text,
} from '@platform/components';
import { ListScaffold } from '@platform/patterns';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent } from './OauthAccountListScreen.ios.styles';
import useOauthAccountListScreen from './useOauthAccountListScreen';

const OauthAccountListScreenIos = () => {
  const { t } = useI18n();
  const {
    items,
    isLoading,
    hasError,
    errorMessage,
    isOffline,
    onRetry,
    onItemPress,
    onDelete,
  } = useOauthAccountListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('auth-account.list.emptyTitle')}
      description={t('auth-account.list.emptyMessage')}
      testID="auth-account-list-empty-state"
    />
  );

  const renderItem = ({ item }) => {
    const title = item?.name ?? item?.id ?? '';
    return (
      <ListItem
        title={title}
        onPress={() => onItemPress(item.id)}
        actions={
          <Button
            variant="ghost"
            size="small"
            onPress={(e) => onDelete(item.id, e)}
            accessibilityLabel={t('auth-account.list.delete')}
            accessibilityHint={t('auth-account.list.deleteHint')}
            testID={`auth-account-delete-${item.id}`}
          >
            {t('common.remove')}
          </Button>
        }
        accessibilityLabel={t('auth-account.list.itemLabel', {
          name: title,
        })}
        testID={`auth-account-item-${item.id}`}
      />
    );
  };

  return (
    <StyledContainer>
      <StyledContent>
        <Text
          variant="h1"
          accessibilityRole="header"
          testID="auth-account-list-title"
        >
          {t('auth-account.list.title')}
        </Text>
        <ListScaffold
          isLoading={isLoading}
          isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
          hasError={hasError}
          error={errorMessage}
          isOffline={isOffline}
          onRetry={onRetry}
          accessibilityLabel={t('auth-account.list.accessibilityLabel')}
          testID="auth-account-list"
          emptyComponent={emptyComponent}
        >
          {items.length > 0 ? (
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          ) : null}
        </ListScaffold>
      </StyledContent>
    </StyledContainer>
  );
};

export default OauthAccountListScreenIos;
