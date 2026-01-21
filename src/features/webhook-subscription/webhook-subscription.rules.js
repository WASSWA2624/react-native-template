/**
 * Webhook Subscription Rules
 * File: webhook-subscription.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseWebhookSubscriptionId = (value) => parseId(value);
const parseWebhookSubscriptionPayload = (value) => parsePayload(value);
const parseWebhookSubscriptionListParams = (value) => parseListParams(value);

export {
  parseWebhookSubscriptionId,
  parseWebhookSubscriptionPayload,
  parseWebhookSubscriptionListParams,
};
