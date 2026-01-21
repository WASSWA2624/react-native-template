/**
 * Vital Sign Rules Tests
 * File: vital-sign.rules.test.js
 */
import { parseVitalSignId, parseVitalSignListParams, parseVitalSignPayload } from '@features/vital-sign';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('vital-sign.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseVitalSignId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseVitalSignPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseVitalSignListParams);
  });
});
