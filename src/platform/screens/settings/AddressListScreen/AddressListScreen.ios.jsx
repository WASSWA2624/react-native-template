/**
 * AddressListScreen - iOS
 * File: AddressListScreen.ios.jsx
 */
import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import {
  Button,
  EmptyState,
  ListItem,
  Text,
} from '@platform/components';
import ListScaffold from '@platform/patterns/ListScaffold/ListScaffold.ios';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledList } from './AddressListScreen.ios.styles';
import useAddressListScreen from './useAddressListScreen';

const AddressListScreenIOS = () => {
  const { t } = useI18n();
  const {
    items,
    isLoading,
    hasError,
    errorMessage,
    isOffline,
    onRetry,
    onAddressPress,
    onDelete,
    onAdd,
  } = useAddressListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('address.list.emptyTitle')}
      description={t('address.list.emptyMessage')}
      testID="address-list-empty-state"
    />
  );

  const ItemSeparator = () => <View style={{ height: 8 }} />;

  const renderItem = ({ item: address }) => {
    const title = address?.line1 ?? address?.id ?? '';
    const subtitle = address?.city && address?.state
      ? `${address.city}, ${address.state}`
      : address?.city ?? address?.state ?? '';
    return (
      <ListItem
        title={title}
        subtitle={subtitle}
        onPress={() => onAddressPress(address.id)}
        actions={
          <Button
            variant="ghost"
            size="small"
            onPress={(e) => onDelete(address.id, e)}
            accessibilityLabel={t('address.list.delete')}
            accessibilityHint={t('address.list.deleteHint')}
            testID={`address-delete-${address.id}`}
          >
            {t('common.remove')}
          </Button>
        }
        accessibilityLabel={t('address.list.itemLabel', { name: title })}
        testID={`address-item-${address.id}`}
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
              testID="address-list-title"
            >
              {t('address.list.title')}
            </Text>
            {onAdd && (
              <Button
                variant="primary"
                onPress={onAdd}
                accessibilityLabel={t('address.list.addLabel')}
                accessibilityHint={t('address.list.addHint')}
                testID="address-list-add"
              >
                {t('address.list.addLabel')}
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
            accessibilityLabel={t('address.list.accessibilityLabel')}
            testID="address-list"
            emptyComponent={emptyComponent}
          >
            {items.length > 0 ? (
              <StyledList>
                <FlatList
                  data={items}
                  keyExtractor={(a) => a.id}
                  renderItem={renderItem}
                  ItemSeparatorComponent={ItemSeparator}
                  scrollEnabled={false}
                  accessibilityLabel={t('address.list.accessibilityLabel')}
                  testID="address-list-flatlist"
                />
              </StyledList>
            ) : null}
          </ListScaffold>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default AddressListScreenIOS;
