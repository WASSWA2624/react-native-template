/**
 * Subscription Plan Rules Tests
 * File: subscription-plan.rules.test.js
 */
import {
  parseSubscriptionPlanId,
  parseSubscriptionPlanListParams,
  parseSubscriptionPlanPayload,
} from '@features/subscription-plan';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('subscription-plan.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseSubscriptionPlanId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseSubscriptionPlanPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseSubscriptionPlanListParams);
  });
});
