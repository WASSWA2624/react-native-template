/**
 * Terms Acceptance Rules Tests
 * File: terms-acceptance.rules.test.js
 */
import {
  parseTermsAcceptanceId,
  parseTermsAcceptanceListParams,
  parseTermsAcceptancePayload,
} from '@features/terms-acceptance';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('terms-acceptance.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseTermsAcceptanceId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseTermsAcceptancePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseTermsAcceptanceListParams);
  });
});
