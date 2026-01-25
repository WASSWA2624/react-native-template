/**
 * UserListScreen - Web
 * File: UserListScreen.web.jsx
 */
import React from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  EmptyState,
  ListItem,
  Text,
} from '@platform/components';
import { ListScaffold } from '@platform/patterns';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledList } from './UserListScreen.web.styles';
import useUserListScreen from './useUserListScreen';

const UserListScreenWeb = () => {
  const { t } = useI18n();
  const {
    items,
    isLoading,
    hasError,
    errorMessage,
    isOffline,
    onRetry,
    onUserPress,
    onDelete,
  } = useUserListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('user.list.emptyTitle')}
      description={t('user.list.emptyMessage')}
      testID="user-list-empty-state"
    />
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <Text
            variant="h1"
            accessibilityRole="header"
            testID="user-list-title"
          >
            {t('user.list.title')}
          </Text>
          <ListScaffold
            isLoading={isLoading}
            isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
            hasError={hasError}
            error={errorMessage}
            isOffline={isOffline}
            onRetry={onRetry}
            accessibilityLabel={t('user.list.accessibilityLabel')}
            testID="user-list"
            emptyComponent={emptyComponent}
          >
            {items.length > 0 ? (
              <StyledList role="list">
                {items.map((user) => {
                  const title = user?.email ?? user?.phone ?? user?.id ?? '';
                  const subtitle = user?.role ? `Role: ${user.role}` : '';
                  return (
                    <li key={user.id} role="listitem">
                      <ListItem
                        title={title}
                        subtitle={subtitle}
                        onPress={() => onUserPress(user.id)}
                        actions={
                          <Button
                            variant="ghost"
                            size="small"
                            onPress={(e) => onDelete(user.id, e)}
                            accessibilityLabel={t('user.list.delete')}
                            accessibilityHint={t('user.list.deleteHint')}
                            testID={`user-delete-${user.id}`}
                          >
                            {t('common.remove')}
                          </Button>
                        }
                        accessibilityLabel={t('user.list.itemLabel', {
                          name: title,
                        })}
                        testID={`user-item-${user.id}`}
                      />
                    </li>
                  );
                })}
              </StyledList>
            ) : null}
          </ListScaffold>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default UserListScreenWeb;
