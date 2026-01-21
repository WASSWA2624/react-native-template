/**
 * Notification Model Tests
 * File: notification.model.test.js
 */
import { normalizeNotification, normalizeNotificationList } from '@features/notification';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('notification.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeNotification, normalizeNotificationList);
  });
});
