/**
 * Notification Delivery Rules Tests
 * File: notification-delivery.rules.test.js
 */
import {
  parseNotificationDeliveryId,
  parseNotificationDeliveryListParams,
  parseNotificationDeliveryPayload,
} from '@features/notification-delivery';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('notification-delivery.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseNotificationDeliveryId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseNotificationDeliveryPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseNotificationDeliveryListParams);
  });
});
