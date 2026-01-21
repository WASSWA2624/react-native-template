/**
 * Insurance Claim Rules Tests
 * File: insurance-claim.rules.test.js
 */
import {
  parseInsuranceClaimId,
  parseInsuranceClaimListParams,
  parseInsuranceClaimPayload,
} from '@features/insurance-claim';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('insurance-claim.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseInsuranceClaimId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseInsuranceClaimPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseInsuranceClaimListParams);
  });
});
