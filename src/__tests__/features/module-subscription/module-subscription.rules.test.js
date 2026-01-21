/**
 * Module Subscription Rules Tests
 * File: module-subscription.rules.test.js
 */
import {
  parseModuleSubscriptionId,
  parseModuleSubscriptionListParams,
  parseModuleSubscriptionPayload,
} from '@features/module-subscription';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('module-subscription.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseModuleSubscriptionId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseModuleSubscriptionPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseModuleSubscriptionListParams);
  });
});
