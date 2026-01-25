/**
 * PermissionListScreen - iOS
 * File: PermissionListScreen.ios.jsx
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
import { StyledContainer, StyledContent } from './PermissionListScreen.ios.styles';
import usePermissionListScreen from './usePermissionListScreen';

const PermissionListScreenIos = () => {
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
  } = usePermissionListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('ermission.list.emptyTitle')}
      description={t('ermission.list.emptyMessage')}
      testID="ermission-list-empty-state"
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
            accessibilityLabel={t('ermission.list.delete')}
            accessibilityHint={t('ermission.list.deleteHint')}
            testID={`ermission-delete-${item.id}`}
          >
            {t('common.remove')}
          </Button>
        }
        accessibilityLabel={t('ermission.list.itemLabel', {
          name: title,
        })}
        testID={`ermission-item-${item.id}`}
      />
    );
  };

  return (
    <StyledContainer>
      <StyledContent>
        <Text
          variant="h1"
          accessibilityRole="header"
          testID="ermission-list-title"
        >
          {t('ermission.list.title')}
        </Text>
        <ListScaffold
          isLoading={isLoading}
          isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
          hasError={hasError}
          error={errorMessage}
          isOffline={isOffline}
          onRetry={onRetry}
          accessibilityLabel={t('ermission.list.accessibilityLabel')}
          testID="ermission-list"
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

export default PermissionListScreenIos;
