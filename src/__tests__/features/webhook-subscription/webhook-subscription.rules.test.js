/**
 * Webhook Subscription Rules Tests
 * File: webhook-subscription.rules.test.js
 */
import {
  parseWebhookSubscriptionId,
  parseWebhookSubscriptionListParams,
  parseWebhookSubscriptionPayload,
} from '@features/webhook-subscription';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('webhook-subscription.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseWebhookSubscriptionId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseWebhookSubscriptionPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseWebhookSubscriptionListParams);
  });
});
