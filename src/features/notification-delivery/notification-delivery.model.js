/**
 * Notification Delivery Model
 * File: notification-delivery.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeNotificationDelivery = (value) => normalize(value);
const normalizeNotificationDeliveryList = (value) => normalizeList(value);

export { normalizeNotificationDelivery, normalizeNotificationDeliveryList };
