/**
 * UserMfaListScreen - Web
 * File: UserMfaListScreen.web.jsx
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
import { StyledContainer, StyledContent, StyledList } from './UserMfaListScreen.web.styles';
import useUserMfaListScreen from './useUserMfaListScreen';

const UserMfaListScreenWeb = () => {
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
  } = useUserMfaListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('ser-mfa.list.emptyTitle')}
      description={t('ser-mfa.list.emptyMessage')}
      testID="ser-mfa-list-empty-state"
    />
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <Text
            variant="h1"
            accessibilityRole="header"
            testID="ser-mfa-list-title"
          >
            {t('ser-mfa.list.title')}
          </Text>
          <ListScaffold
            isLoading={isLoading}
            isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
            hasError={hasError}
            error={errorMessage}
            isOffline={isOffline}
            onRetry={onRetry}
            accessibilityLabel={t('ser-mfa.list.accessibilityLabel')}
            testID="ser-mfa-list"
            emptyComponent={emptyComponent}
          >
            {items.length > 0 ? (
              <StyledList role="list">
                {items.map((item) => {
                  const title = item?.name ?? item?.id ?? '';
                  return (
                    <li key={item.id} role="listitem">
                      <ListItem
                        title={title}
                        onPress={() => onItemPress(item.id)}
                        actions={
                          <Button
                            variant="ghost"
                            size="small"
                            onPress={(e) => onDelete(item.id, e)}
                            accessibilityLabel={t('ser-mfa.list.delete')}
                            accessibilityHint={t('ser-mfa.list.deleteHint')}
                            testID={`ser-mfa-delete-${item.id}`}
                          >
                            {t('common.remove')}
                          </Button>
                        }
                        accessibilityLabel={t('ser-mfa.list.itemLabel', {
                          name: title,
                        })}
                        testID={`ser-mfa-item-${item.id}`}
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

export default UserMfaListScreenWeb;
