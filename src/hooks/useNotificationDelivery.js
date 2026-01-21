/**
 * useNotificationDelivery Hook
 * File: useNotificationDelivery.js
 */
import useCrud from '@hooks/useCrud';
import {
  createNotificationDelivery,
  deleteNotificationDelivery,
  getNotificationDelivery,
  listNotificationDeliveries,
  updateNotificationDelivery,
} from '@features/notification-delivery';

const useNotificationDelivery = () =>
  useCrud({
    list: listNotificationDeliveries,
    get: getNotificationDelivery,
    create: createNotificationDelivery,
    update: updateNotificationDelivery,
    remove: deleteNotificationDelivery,
  });

export default useNotificationDelivery;
