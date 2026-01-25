/**
 * RolePermissionListScreen - Web
 * File: RolePermissionListScreen.web.jsx
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
import { StyledContainer, StyledContent, StyledList } from './RolePermissionListScreen.web.styles';
import useRolePermissionListScreen from './useRolePermissionListScreen';

const RolePermissionListScreenWeb = () => {
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
  } = useRolePermissionListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('ole-permission.list.emptyTitle')}
      description={t('ole-permission.list.emptyMessage')}
      testID="ole-permission-list-empty-state"
    />
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <Text
            variant="h1"
            accessibilityRole="header"
            testID="ole-permission-list-title"
          >
            {t('ole-permission.list.title')}
          </Text>
          <ListScaffold
            isLoading={isLoading}
            isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
            hasError={hasError}
            error={errorMessage}
            isOffline={isOffline}
            onRetry={onRetry}
            accessibilityLabel={t('ole-permission.list.accessibilityLabel')}
            testID="ole-permission-list"
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
                            accessibilityLabel={t('ole-permission.list.delete')}
                            accessibilityHint={t('ole-permission.list.deleteHint')}
                            testID={`ole-permission-delete-${item.id}`}
                          >
                            {t('common.remove')}
                          </Button>
                        }
                        accessibilityLabel={t('ole-permission.list.itemLabel', {
                          name: title,
                        })}
                        testID={`ole-permission-item-${item.id}`}
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

export default RolePermissionListScreenWeb;
