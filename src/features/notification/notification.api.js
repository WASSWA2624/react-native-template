/**
 * Notification API
 * File: notification.api.js
 */
import { endpoints } from '@config/endpoints';
import { apiClient, buildQueryString } from '@services/api';

const listNotificationsApi = (params = {}) =>
  apiClient({
    url: `${endpoints.NOTIFICATIONS.LIST}${buildQueryString(params)}`,
    method: 'GET',
  });

const getNotificationApi = (id) =>
  apiClient({
    url: endpoints.NOTIFICATIONS.GET(id),
    method: 'GET',
  });

const markNotificationReadApi = (id) =>
  apiClient({
    url: endpoints.NOTIFICATIONS.MARK_READ(id),
    method: 'POST',
  });

const markNotificationUnreadApi = (id) =>
  apiClient({
    url: endpoints.NOTIFICATIONS.MARK_UNREAD(id),
    method: 'POST',
  });

const getNotificationTargetsApi = () =>
  apiClient({
    url: endpoints.NOTIFICATIONS.GET_TARGETS,
    method: 'GET',
  });

const getNotificationPreferencesApi = () =>
  apiClient({
    url: endpoints.NOTIFICATIONS.GET_PREFERENCES,
    method: 'GET',
  });

const updateNotificationPreferencesApi = (payload) =>
  apiClient({
    url: endpoints.NOTIFICATIONS.UPDATE_PREFERENCES,
    method: 'PUT',
    body: payload,
  });

const notificationApi = {
  list: listNotificationsApi,
  get: getNotificationApi,
};

export {
  notificationApi,
  listNotificationsApi,
  getNotificationApi,
  markNotificationReadApi,
  markNotificationUnreadApi,
  getNotificationTargetsApi,
  getNotificationPreferencesApi,
  updateNotificationPreferencesApi,
};
