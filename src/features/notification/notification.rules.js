/**
 * Notification Rules
 * File: notification.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseNotificationId = (value) => parseId(value);
const parseNotificationPayload = (value) => parsePayload(value);
const parseNotificationListParams = (value) => parseListParams(value);

export { parseNotificationId, parseNotificationPayload, parseNotificationListParams };
