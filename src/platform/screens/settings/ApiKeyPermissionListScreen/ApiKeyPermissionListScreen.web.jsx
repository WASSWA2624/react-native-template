/**
 * ApiKeyPermissionListScreen - Web
 * File: ApiKeyPermissionListScreen.web.jsx
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
import { StyledContainer, StyledContent, StyledList } from './ApiKeyPermissionListScreen.web.styles';
import useApiKeyPermissionListScreen from './useApiKeyPermissionListScreen';

const ApiKeyPermissionListScreenWeb = () => {
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
  } = useApiKeyPermissionListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('pi-key-permission.list.emptyTitle')}
      description={t('pi-key-permission.list.emptyMessage')}
      testID="pi-key-permission-list-empty-state"
    />
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <Text
            variant="h1"
            accessibilityRole="header"
            testID="pi-key-permission-list-title"
          >
            {t('pi-key-permission.list.title')}
          </Text>
          <ListScaffold
            isLoading={isLoading}
            isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
            hasError={hasError}
            error={errorMessage}
            isOffline={isOffline}
            onRetry={onRetry}
            accessibilityLabel={t('pi-key-permission.list.accessibilityLabel')}
            testID="pi-key-permission-list"
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
                            accessibilityLabel={t('pi-key-permission.list.delete')}
                            accessibilityHint={t('pi-key-permission.list.deleteHint')}
                            testID={`pi-key-permission-delete-${item.id}`}
                          >
                            {t('common.remove')}
                          </Button>
                        }
                        accessibilityLabel={t('pi-key-permission.list.itemLabel', {
                          name: title,
                        })}
                        testID={`pi-key-permission-item-${item.id}`}
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

export default ApiKeyPermissionListScreenWeb;
