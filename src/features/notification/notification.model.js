/**
 * Notification Model
 * File: notification.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeNotification = (value) => normalize(value);
const normalizeNotificationList = (value) => normalizeList(value);

export { normalizeNotification, normalizeNotificationList };
