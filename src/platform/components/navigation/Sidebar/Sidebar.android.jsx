/**
 * Sidebar Component - Android
 * Menu from MAIN_NAV_ITEMS; nested items under main item. Vertically scrollable; selected item uniquely styled.
 */
import React, { useMemo, useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { useI18n } from '@hooks';
import { MAIN_NAV_ITEMS, getNavItemLabel } from '@config/sideMenu';
import SidebarItem from '@platform/components/navigation/SidebarItem';
import { StyledSidebar, StyledSidebarContent, StyledNavItemChildren } from './Sidebar.android.styles';

const isItemActive = (pathname, href) =>
  href && (pathname === href || (href !== '/' && pathname.startsWith(href + '/')));
const hasActiveChild = (pathname, children) =>
  pathname && children && children.length > 0 && children.some((c) => isItemActive(pathname, c.path));

const SidebarAndroid = ({
  items: itemsProp,
  isItemVisible,
  accessibilityLabel,
  testID,
  style,
  ...rest
}) => {
  const { t } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState({});

  const tree = useMemo(() => {
    const list =
      Array.isArray(itemsProp) && itemsProp.length > 0
        ? itemsProp
        : MAIN_NAV_ITEMS.map((it) => ({
            ...it,
            href: it.path,
            label: getNavItemLabel(t, it),
            icon: it.icon,
          }));
    return isItemVisible ? list.filter(isItemVisible) : list;
  }, [itemsProp, isItemVisible, t]);

  const isSectionExpanded = useCallback(
    (itemId) => {
      if (expandedSections[itemId] !== undefined) return expandedSections[itemId];
      const item = tree.find((i) => i.id === itemId);
      return item && hasActiveChild(pathname, item.children);
    },
    [tree, pathname, expandedSections]
  );

  const toggleSection = useCallback((id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const renderItem = (item, level = 0) => {
    const href = item.href ?? item.path;
    const label = item.label ?? getNavItemLabel(t, item);
    const icon = item.icon ?? item.id;
    const active = isItemActive(pathname, href);
    const hasChildren = item.children != null && item.children.length > 0;
    const expanded = hasChildren && isSectionExpanded(item.id);

    return (
      <React.Fragment key={item.id}>
        <SidebarItem
          key={item.id}
          item={{ ...item, href, label, path: href }}
          icon={icon}
          label={label}
          path={href}
          collapsed={false}
          active={active}
          level={level}
          hasChildren={hasChildren}
          expanded={expanded}
          onToggleExpand={hasChildren ? () => toggleSection(item.id) : undefined}
          onPress={() => href && router.push(href)}
          testID={testID ? `sidebar-item-${item.id}` : undefined}
        />
        {hasChildren && expanded && (
          <StyledNavItemChildren>
            {item.children.map((child) =>
              renderItem(
                {
                  ...child,
                  href: child.path,
                  label: getNavItemLabel(t, child),
                  icon: child.icon,
                },
                1
              )
            )}
          </StyledNavItemChildren>
        )}
      </React.Fragment>
    );
  };

  return (
    <StyledSidebar
      accessibilityRole="menu"
      accessibilityLabel={accessibilityLabel || t('navigation.sidebar.title')}
      testID={testID}
      style={style}
      {...rest}
    >
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator
        contentContainerStyle={{ paddingBottom: 16 }}
        style={{ flex: 1 }}
      >
        <StyledSidebarContent>
          {tree.map((item) => renderItem(item))}
        </StyledSidebarContent>
      </ScrollView>
    </StyledSidebar>
  );
};

export default SidebarAndroid;
