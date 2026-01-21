/**
 * Consent Rules Tests
 * File: consent.rules.test.js
 */
import { parseConsentId, parseConsentListParams, parseConsentPayload } from '@features/consent';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('consent.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseConsentId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseConsentPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseConsentListParams);
  });
});
