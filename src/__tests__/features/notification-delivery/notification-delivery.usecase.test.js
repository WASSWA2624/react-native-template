/**
 * Notification Delivery Usecase Tests
 * File: notification-delivery.usecase.test.js
 */
import {
  createNotificationDelivery,
  deleteNotificationDelivery,
  getNotificationDelivery,
  listNotificationDeliveries,
  updateNotificationDelivery,
} from '@features/notification-delivery';
import { notificationDeliveryApi } from '@features/notification-delivery/notification-delivery.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/notification-delivery/notification-delivery.api', () => ({
  notificationDeliveryApi: {
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  },
}));

jest.mock('@offline/request', () => ({
  queueRequestIfOffline: jest.fn(),
}));

describe('notification-delivery.usecase', () => {
  beforeEach(() => {
    notificationDeliveryApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    notificationDeliveryApi.get.mockResolvedValue({ data: { id: '1' } });
    notificationDeliveryApi.create.mockResolvedValue({ data: { id: '1' } });
    notificationDeliveryApi.update.mockResolvedValue({ data: { id: '1' } });
    notificationDeliveryApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listNotificationDeliveries,
      get: getNotificationDelivery,
      create: createNotificationDelivery,
      update: updateNotificationDelivery,
      remove: deleteNotificationDelivery,
    },
    { queueRequestIfOffline }
  );
});
