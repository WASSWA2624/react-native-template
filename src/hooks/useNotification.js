/**
 * useNotification Hook
 * File: useNotification.js
 */
import useCrud from '@hooks/useCrud';
import {
  getNotification,
  getNotificationPreferences,
  listNotifications,
  listNotificationTargets,
  markNotificationRead,
  markNotificationUnread,
  updateNotificationPreferences,
} from '@features/notification';

const useNotification = () =>
  useCrud({
    list: listNotifications,
    get: getNotification,
    markRead: markNotificationRead,
    markUnread: markNotificationUnread,
    listTargets: listNotificationTargets,
    getPreferences: getNotificationPreferences,
    updatePreferences: updateNotificationPreferences,
  });

export default useNotification;
