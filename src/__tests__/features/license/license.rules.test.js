/**
 * License Rules Tests
 * File: license.rules.test.js
 */
import { parseLicenseId, parseLicenseListParams, parseLicensePayload } from '@features/license';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('license.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseLicenseId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseLicensePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseLicenseListParams);
  });
});
