/**
 * Webhook Subscription Model
 * File: webhook-subscription.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeWebhookSubscription = (value) => normalize(value);
const normalizeWebhookSubscriptionList = (value) => normalizeList(value);

export { normalizeWebhookSubscription, normalizeWebhookSubscriptionList };
