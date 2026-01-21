/**
 * Webhook Subscription API
 * File: webhook-subscription.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const webhookSubscriptionApi = createCrudApi(endpoints.WEBHOOK_SUBSCRIPTIONS);

export { webhookSubscriptionApi };
