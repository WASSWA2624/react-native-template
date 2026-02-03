/**
 * RoomListScreen - Web
 * Full UI always renders: title + list area. On error/offline shows inline message + empty list.
 */
import React from 'react';
import {
  Button,
  EmptyState,
  ErrorState,
  ListItem,
  LoadingSpinner,
  OfflineState,
  Text,
} from '@platform/components';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledList, StyledListBody } from './RoomListScreen.web.styles';
import useRoomListScreen from './useRoomListScreen';

const RoomListScreenWeb = () => {
  const { t } = useI18n();
  const {
    items,
    isLoading,
    hasError,
    errorMessage,
    isOffline,
    onRetry,
    onRoomPress,
    onDelete,
    onAdd,
  } = useRoomListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('room.list.emptyTitle')}
      description={t('room.list.emptyMessage')}
      testID="room-list-empty-state"
    />
  );

  return (
    <StyledContainer>
      <StyledContent>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <Text variant="h1" accessibilityRole="header" testID="room-list-title">
            {t('room.list.title')}
          </Text>
          {onAdd && (
            <Button
              variant="primary"
              onPress={onAdd}
              accessibilityLabel={t('room.list.addLabel')}
              accessibilityHint={t('room.list.addHint')}
              testID="room-list-add"
            >
              {t('room.list.addLabel')}
            </Button>
          )}
        </div>
        <StyledListBody role="region" aria-label={t('room.list.accessibilityLabel')} data-testid="room-list">
          {isLoading && <LoadingSpinner testID="room-list-spinner" />}
          {!isLoading && hasError && (
            <>
              <ErrorState
                title={t('listScaffold.errorState.title')}
                description={errorMessage}
                action={onRetry ? <button type="button" onClick={onRetry} aria-label={t('common.retry')}>{t('common.retry')}</button> : undefined}
                testID="room-list-error-state"
              />
              {emptyComponent}
            </>
          )}
          {!isLoading && isOffline && (
            <>
              <OfflineState
                action={onRetry ? <button type="button" onClick={onRetry} aria-label={t('common.retry')}>{t('common.retry')}</button> : undefined}
                testID="room-list-offline-state"
              />
              {emptyComponent}
            </>
          )}
          {!isLoading && !hasError && !isOffline && items.length === 0 && emptyComponent}
          {!isLoading && !hasError && !isOffline && items.length > 0 && (
            <StyledList role="list">
              {items.map((room) => {
                const title = room?.name ?? room?.id ?? '';
                const subtitle = room?.floor ? `${t('room.list.floorLabel')}: ${room.floor}` : '';
                return (
                  <li key={room.id} role="listitem">
                    <ListItem
                      title={title}
                      subtitle={subtitle}
                      onPress={() => onRoomPress(room.id)}
                      actions={
                        <Button
                          variant="ghost"
                          size="small"
                          onPress={(e) => onDelete(room.id, e)}
                          accessibilityLabel={t('room.list.delete')}
                          accessibilityHint={t('room.list.deleteHint')}
                          testID={`room-delete-${room.id}`}
                        >
                          {t('common.remove')}
                        </Button>
                      }
                      accessibilityLabel={t('room.list.itemLabel', { name: title })}
                      testID={`room-item-${room.id}`}
                    />
                  </li>
                );
              })}
            </StyledList>
          )}
        </StyledListBody>
      </StyledContent>
    </StyledContainer>
  );
};

export default RoomListScreenWeb;
