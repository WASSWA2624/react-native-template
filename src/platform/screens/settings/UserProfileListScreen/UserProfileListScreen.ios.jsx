/**
 * UserProfileListScreen - iOS
 * File: UserProfileListScreen.ios.jsx
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
import { StyledContainer, StyledContent } from './UserProfileListScreen.ios.styles';
import useUserProfileListScreen from './useUserProfileListScreen';

const UserProfileListScreenIos = () => {
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
  } = useUserProfileListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('ser-profile.list.emptyTitle')}
      description={t('ser-profile.list.emptyMessage')}
      testID="ser-profile-list-empty-state"
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
            accessibilityLabel={t('ser-profile.list.delete')}
            accessibilityHint={t('ser-profile.list.deleteHint')}
            testID={`ser-profile-delete-${item.id}`}
          >
            {t('common.remove')}
          </Button>
        }
        accessibilityLabel={t('ser-profile.list.itemLabel', {
          name: title,
        })}
        testID={`ser-profile-item-${item.id}`}
      />
    );
  };

  return (
    <StyledContainer>
      <StyledContent>
        <Text
          variant="h1"
          accessibilityRole="header"
          testID="ser-profile-list-title"
        >
          {t('ser-profile.list.title')}
        </Text>
        <ListScaffold
          isLoading={isLoading}
          isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
          hasError={hasError}
          error={errorMessage}
          isOffline={isOffline}
          onRetry={onRetry}
          accessibilityLabel={t('ser-profile.list.accessibilityLabel')}
          testID="ser-profile-list"
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

export default UserProfileListScreenIos;
