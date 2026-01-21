/**
 * Webhook Subscription Model Tests
 * File: webhook-subscription.model.test.js
 */
import {
  normalizeWebhookSubscription,
  normalizeWebhookSubscriptionList,
} from '@features/webhook-subscription';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('webhook-subscription.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeWebhookSubscription, normalizeWebhookSubscriptionList);
  });
});
