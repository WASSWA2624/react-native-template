/**
 * Notification Delivery API
 * File: notification-delivery.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const notificationDeliveryApi = createCrudApi(endpoints.NOTIFICATION_DELIVERIES);

export { notificationDeliveryApi };
