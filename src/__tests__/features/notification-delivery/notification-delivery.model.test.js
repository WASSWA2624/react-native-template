/**
 * Notification Delivery Model Tests
 * File: notification-delivery.model.test.js
 */
import {
  normalizeNotificationDelivery,
  normalizeNotificationDeliveryList,
} from '@features/notification-delivery';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('notification-delivery.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeNotificationDelivery, normalizeNotificationDeliveryList);
  });
});
