/**
 * Notification Delivery Use Cases
 * File: notification-delivery.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { notificationDeliveryApi } from './notification-delivery.api';
import {
  normalizeNotificationDelivery,
  normalizeNotificationDeliveryList,
} from './notification-delivery.model';
import {
  parseNotificationDeliveryId,
  parseNotificationDeliveryListParams,
  parseNotificationDeliveryPayload,
} from './notification-delivery.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listNotificationDeliveries = async (params = {}) =>
  execute(async () => {
    const parsed = parseNotificationDeliveryListParams(params);
    const response = await notificationDeliveryApi.list(parsed);
    return normalizeNotificationDeliveryList(response.data);
  });

const getNotificationDelivery = async (id) =>
  execute(async () => {
    const parsedId = parseNotificationDeliveryId(id);
    const response = await notificationDeliveryApi.get(parsedId);
    return normalizeNotificationDelivery(response.data);
  });

const createNotificationDelivery = async (payload) =>
  execute(async () => {
    const parsed = parseNotificationDeliveryPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.NOTIFICATION_DELIVERIES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeNotificationDelivery(parsed);
    }
    const response = await notificationDeliveryApi.create(parsed);
    return normalizeNotificationDelivery(response.data);
  });

const updateNotificationDelivery = async (id, payload) =>
  execute(async () => {
    const parsedId = parseNotificationDeliveryId(id);
    const parsed = parseNotificationDeliveryPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.NOTIFICATION_DELIVERIES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeNotificationDelivery({ id: parsedId, ...parsed });
    }
    const response = await notificationDeliveryApi.update(parsedId, parsed);
    return normalizeNotificationDelivery(response.data);
  });

const deleteNotificationDelivery = async (id) =>
  execute(async () => {
    const parsedId = parseNotificationDeliveryId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.NOTIFICATION_DELIVERIES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeNotificationDelivery({ id: parsedId });
    }
    const response = await notificationDeliveryApi.remove(parsedId);
    return normalizeNotificationDelivery(response.data);
  });

export {
  listNotificationDeliveries,
  getNotificationDelivery,
  createNotificationDelivery,
  updateNotificationDelivery,
  deleteNotificationDelivery,
};
