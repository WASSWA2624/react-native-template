/**
 * Notification Delivery API Tests
 * File: notification-delivery.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { notificationDeliveryApi } from '@features/notification-delivery/notification-delivery.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('notification-delivery.api', () => {
  it('creates crud api with notification delivery endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.NOTIFICATION_DELIVERIES);
    expect(notificationDeliveryApi).toBeDefined();
  });
});
