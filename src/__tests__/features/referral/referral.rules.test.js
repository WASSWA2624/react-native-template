/**
 * Referral Rules Tests
 * File: referral.rules.test.js
 */
import { parseReferralId, parseReferralListParams, parseReferralPayload } from '@features/referral';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('referral.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseReferralId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseReferralPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseReferralListParams);
  });
});
