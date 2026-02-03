/**
 * BedListScreen - Android
 * File: BedListScreen.android.jsx
 */
import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import {
  Button,
  EmptyState,
  ListItem,
  Text,
} from '@platform/components';
import ListScaffold from '@platform/patterns/ListScaffold/ListScaffold.android';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledList } from './BedListScreen.android.styles';
import useBedListScreen from './useBedListScreen';

const BedListScreenAndroid = () => {
  const { t } = useI18n();
  const {
    items,
    isLoading,
    hasError,
    errorMessage,
    isOffline,
    onRetry,
    onBedPress,
    onDelete,
    onAdd,
  } = useBedListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('bed.list.emptyTitle')}
      description={t('bed.list.emptyMessage')}
      testID="bed-list-empty-state"
    />
  );

  const ItemSeparator = () => <View style={{ height: 8 }} />;

  const renderItem = ({ item: bed }) => {
    const title = bed?.label ?? bed?.id ?? '';
    const subtitle = bed?.status ? `${t('bed.list.statusLabel')}: ${bed.status}` : '';
    return (
      <ListItem
        title={title}
        subtitle={subtitle}
        onPress={() => onBedPress(bed.id)}
        actions={
          <Button
            variant="ghost"
            size="small"
            onPress={(e) => onDelete(bed.id, e)}
            accessibilityLabel={t('bed.list.delete')}
            accessibilityHint={t('bed.list.deleteHint')}
            testID={`bed-delete-${bed.id}`}
          >
            {t('common.remove')}
          </Button>
        }
        accessibilityLabel={t('bed.list.itemLabel', { name: title })}
        testID={`bed-item-${bed.id}`}
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
            <Text
              variant="h1"
              accessibilityRole="header"
              testID="bed-list-title"
            >
              {t('bed.list.title')}
            </Text>
            {onAdd && (
              <Button
                variant="primary"
                onPress={onAdd}
                accessibilityLabel={t('bed.list.addLabel')}
                accessibilityHint={t('bed.list.addHint')}
                testID="bed-list-add"
              >
                {t('bed.list.addLabel')}
              </Button>
            )}
          </View>
          <ListScaffold
            isLoading={isLoading}
            isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
            hasError={hasError}
            error={errorMessage}
            isOffline={isOffline}
            onRetry={onRetry}
            accessibilityLabel={t('bed.list.accessibilityLabel')}
            testID="bed-list"
            emptyComponent={emptyComponent}
          >
            {items.length > 0 ? (
              <StyledList>
                <FlatList
                  data={items}
                  keyExtractor={(b) => b.id}
                  renderItem={renderItem}
                  ItemSeparatorComponent={ItemSeparator}
                  scrollEnabled={false}
                  accessibilityLabel={t('bed.list.accessibilityLabel')}
                  testID="bed-list-flatlist"
                />
              </StyledList>
            ) : null}
          </ListScaffold>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default BedListScreenAndroid;
