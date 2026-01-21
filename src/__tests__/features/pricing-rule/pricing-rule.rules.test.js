/**
 * Pricing Rule Rules Tests
 * File: pricing-rule.rules.test.js
 */
import {
  parsePricingRuleId,
  parsePricingRuleListParams,
  parsePricingRulePayload,
} from '@features/pricing-rule';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('pricing-rule.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePricingRuleId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePricingRulePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePricingRuleListParams);
  });
});
