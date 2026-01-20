/**
 * usePrimaryNavigation Hook
 * Builds primary navigation items for main and patient shells.
 * File: usePrimaryNavigation.js
 */
import { useCallback, useMemo } from 'react';
import useI18n from '@hooks/useI18n';
import useAuth from '@hooks/useAuth';

const normalizeRole = (role) => {
  if (!role) return null;
  return String(role).trim().toLowerCase();
};

const normalizeRoles = (roles) => {
  if (!roles) return [];
  const list = Array.isArray(roles) ? roles : [roles];
  return list.map(normalizeRole).filter(Boolean);
};

const STAFF_ROLES = [
  'admin',
  'hospital-admin',
  'system-admin',
  'super-admin',
  'doctor',
  'specialist',
  'nurse',
  'clinical-officer',
  'intern',
  'laboratory-technician',
  'radiology-technician',
  'pharmacist',
  'pharmacy-assistant',
  'emergency-officer',
  'ambulance-driver',
  'finance',
  'accounts',
  'hr',
  'housekeeping',
  'facility-manager',
];

/**
 * Primary navigation hook
 * @returns {Object} navigation items and visibility helpers
 */
const usePrimaryNavigation = () => {
  const { t } = useI18n();
  const { isAuthenticated, roles } = useAuth();

  const mainItems = useMemo(
    () => [
      {
        id: 'home',
        label: t('navigation.items.main.home'),
        href: '/home',
        icon: 'H',
        roles: STAFF_ROLES,
      },
      {
        id: 'overview',
        label: t('navigation.items.main.overview'),
        href: '/',
        icon: 'O',
        roles: STAFF_ROLES,
      },
    ],
    [t]
  );

  const patientItems = useMemo(
    () => [
      {
        id: 'home',
        label: t('navigation.items.patient.home'),
        href: '/',
        icon: 'H',
        roles: ['patient'],
      },
    ],
    [t]
  );

  const isItemVisible = useCallback(
    (item) => {
      if (!item || !item.roles || item.roles.length === 0) {
        return true;
      }
      if (!isAuthenticated) {
        return false;
      }
      const normalizedItemRoles = normalizeRoles(item.roles);
      if (normalizedItemRoles.length === 0) {
        return false;
      }
      return normalizedItemRoles.some((role) => roles.includes(role));
    },
    [isAuthenticated, roles]
  );

  return {
    mainItems,
    patientItems,
    isItemVisible,
  };
};

export default usePrimaryNavigation;
