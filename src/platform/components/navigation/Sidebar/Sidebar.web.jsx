import React, { useMemo, useCallback, useState } from 'react';
import { usePathname, useRouter } from 'expo-router';
import { useI18n } from '@hooks';
import {
  StyledSidebar,
  StyledSidebarContent,
  StyledNavItemChildren,
} from './Sidebar.web.styles';
import SidebarItem from '@platform/components/navigation/SidebarItem';
import { MAIN_NAV_ITEMS, getNavItemLabel } from '@config/sideMenu';

const isItemActive = (pathname, href) => {
  if (!href) return false;
  if (pathname === href) return true;
  if (href !== '/' && pathname.startsWith(href + '/')) return true;
  return false;
};

const hasActiveChild = (pathname, children) => {
  if (!pathname || !children || children.length === 0) return false;
  return children.some((c) => isItemActive(pathname, c.path));
};

/**
 * Sidebar component for Web.
 * Menu populated from MAIN_NAV_ITEMS; nested items shown under their main item.
 * Vertically scrollable; scrollbar visible only when needed. Selected item uniquely styled.
 */
const SidebarWeb = ({
  items = MAIN_NAV_ITEMS,
  itemsI18nPrefix = 'navigation.items.main',
  collapsed = false,
  onItemPress,
  isItemVisible,
  accessibilityLabel,
  testID,
  className,
  style,
  ...rest
}) => {
  const { t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState(() => ({}));

  const tree = useMemo(() => {
    const list = Array.isArray(items) ? items : [];
    return list.filter((item) => (isItemVisible ? isItemVisible(item) : true));
  }, [items, isItemVisible]);

  const isSectionExpanded = useCallback(
    (itemId) => {
      if (expandedSections[itemId] !== undefined) return expandedSections[itemId];
      const item = tree.find((i) => i.id === itemId);
      return item && hasActiveChild(pathname, item.children);
    },
    [tree, pathname, expandedSections]
  );

  const toggleSection = useCallback((itemId) => {
    setExpandedSections((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  }, []);

  const handleItemClick = useCallback(
    (item, href) => {
      if (onItemPress) onItemPress(item);
      else if (href) router.push(href);
    },
    [onItemPress, router]
  );

  const renderItem = (item, level = 0) => {
    const href = item.href ?? item.path;
    const label = item.label ?? getNavItemLabel(t, item, itemsI18nPrefix);
    const active = isItemActive(pathname, href);
    const hasChildren = item.children != null && item.children.length > 0;
    const expanded = hasChildren && isSectionExpanded(item.id);

    return (
      <React.Fragment key={item.id}>
        <SidebarItem
          item={{ ...item, href, label, path: href }}
          collapsed={collapsed}
          active={active}
          testID={testID ? `sidebar-item-${item.id}` : undefined}
          onClick={() => handleItemClick(item, href)}
          onPress={() => handleItemClick(item, href)}
          level={level}
          hasChildren={hasChildren}
          expanded={expanded}
          onToggleExpand={hasChildren ? () => toggleSection(item.id) : undefined}
        />
        {hasChildren && expanded && !collapsed && (
          <StyledNavItemChildren>
            {item.children.map((child) => renderItem({ ...child, href: child.path, label: getNavItemLabel(t, child, itemsI18nPrefix) }, 1))}
          </StyledNavItemChildren>
        )}
      </React.Fragment>
    );
  };

  return (
    <StyledSidebar
      collapsed={collapsed}
      accessibilityRole="navigation"
      accessibilityLabel={accessibilityLabel || t('navigation.sidebar.title')}
      testID={testID}
      className={className}
      style={style}
      {...rest}
    >
      <StyledSidebarContent $collapsed={collapsed}>
        {tree.map((item) => renderItem(item))}
      </StyledSidebarContent>
    </StyledSidebar>
  );
};

export default SidebarWeb;
