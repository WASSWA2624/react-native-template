/**
 * Notification Delivery Rules
 * File: notification-delivery.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseNotificationDeliveryId = (value) => parseId(value);
const parseNotificationDeliveryPayload = (value) => parsePayload(value);
const parseNotificationDeliveryListParams = (value) => parseListParams(value);

export {
  parseNotificationDeliveryId,
  parseNotificationDeliveryPayload,
  parseNotificationDeliveryListParams,
};
