/**
 * Subscription Rules Tests
 * File: subscription.rules.test.js
 */
import { parseSubscriptionId, parseSubscriptionListParams, parseSubscriptionPayload } from '@features/subscription';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('subscription.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseSubscriptionId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseSubscriptionPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseSubscriptionListParams);
  });
});
