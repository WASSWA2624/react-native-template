import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '@platform/components/display/Icon';
import { getMenuIconGlyph } from '@config/sideMenu';
import { Row, IconBox, Label } from './SidebarItem.android.styles.jsx';

const normalize = (props) => {
  if (props.item) {
    const { path, href, label, icon } = props.item;
    return {
      path: path || href,
      label,
      icon,
      collapsed: props.collapsed,
      active: props.active,
      onPress: props.onPress,
      level: props.level,
      hasChildren: props.hasChildren,
      expanded: props.expanded,
      onToggleExpand: props.onToggleExpand,
    };
  }
  return {
    path: props.path || props.href,
    label: props.label,
    icon: props.icon,
    collapsed: props.collapsed,
    active: props.active,
    onPress: props.onPress,
    level: props.level,
    hasChildren: props.hasChildren,
    expanded: props.expanded,
    onToggleExpand: props.onToggleExpand,
  };
};

const SidebarItemAndroid = (props) => {
  const { path, label, icon, collapsed, active, onPress, level = 0, hasChildren, expanded, onToggleExpand } = normalize(props);

  const handlePress = () => {
    if (onPress) onPress();
  };

  const testID = props.testID ?? (props.item?.id ? `sidebar-item-${props.item.id}` : undefined);
  return (
    <TouchableOpacity testID={testID} onPress={handlePress} accessibilityLabel={label} accessibilityState={{ selected: !!active }}>
      <Row $active={active} $level={level}>
        <IconBox>
          <Icon glyph={getMenuIconGlyph(icon)} size="sm" decorative />
        </IconBox>
        <Label $active={active}>{label}</Label>
        {hasChildren && (
          <TouchableOpacity
            onPress={(e) => {
              e?.stopPropagation?.();
              onToggleExpand?.();
            }}
            style={{ padding: 4 }}
            accessibilityLabel={expanded ? 'Collapse' : 'Expand'}
          >
            <Label $active={false}>{expanded ? '▾' : '▸'}</Label>
          </TouchableOpacity>
        )}
      </Row>
    </TouchableOpacity>
  );
};

export default SidebarItemAndroid;