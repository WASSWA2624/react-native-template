/**
 * Notification Rules Tests
 * File: notification.rules.test.js
 */
import {
  parseNotificationId,
  parseNotificationListParams,
  parseNotificationPayload,
} from '@features/notification';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('notification.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseNotificationId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseNotificationPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseNotificationListParams);
  });
});
