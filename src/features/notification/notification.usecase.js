/**
 * Notification Use Cases
 * File: notification.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import {
  getNotificationPreferencesApi,
  getNotificationTargetsApi,
  markNotificationReadApi,
  markNotificationUnreadApi,
  notificationApi,
  updateNotificationPreferencesApi,
} from './notification.api';
import { normalizeNotification, normalizeNotificationList } from './notification.model';
import {
  parseNotificationId,
  parseNotificationListParams,
  parseNotificationPayload,
} from './notification.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listNotifications = async (params = {}) =>
  execute(async () => {
    const parsed = parseNotificationListParams(params);
    const response = await notificationApi.list(parsed);
    return normalizeNotificationList(response.data);
  });

const getNotification = async (id) =>
  execute(async () => {
    const parsedId = parseNotificationId(id);
    const response = await notificationApi.get(parsedId);
    return normalizeNotification(response.data);
  });

const markNotificationRead = async (id) =>
  execute(async () => {
    const parsedId = parseNotificationId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.NOTIFICATIONS.MARK_READ(parsedId),
      method: 'POST',
    });
    if (queued) {
      return normalizeNotification({ id: parsedId, read: true });
    }
    const response = await markNotificationReadApi(parsedId);
    return normalizeNotification(response.data);
  });

const markNotificationUnread = async (id) =>
  execute(async () => {
    const parsedId = parseNotificationId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.NOTIFICATIONS.MARK_UNREAD(parsedId),
      method: 'POST',
    });
    if (queued) {
      return normalizeNotification({ id: parsedId, read: false });
    }
    const response = await markNotificationUnreadApi(parsedId);
    return normalizeNotification(response.data);
  });

const listNotificationTargets = async () =>
  execute(async () => {
    const response = await getNotificationTargetsApi();
    return normalizeNotificationList(response.data);
  });

const getNotificationPreferences = async () =>
  execute(async () => {
    const response = await getNotificationPreferencesApi();
    return normalizeNotification(response.data);
  });

const updateNotificationPreferences = async (payload) =>
  execute(async () => {
    const parsed = parseNotificationPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.NOTIFICATIONS.UPDATE_PREFERENCES,
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeNotification(parsed);
    }
    const response = await updateNotificationPreferencesApi(parsed);
    return normalizeNotification(response.data);
  });

export {
  listNotifications,
  getNotification,
  markNotificationRead,
  markNotificationUnread,
  listNotificationTargets,
  getNotificationPreferences,
  updateNotificationPreferences,
};
