/**
 * Radiology Result Rules Tests
 * File: radiology-result.rules.test.js
 */
import { parseRadiologyResultId, parseRadiologyResultListParams, parseRadiologyResultPayload } from '@features/radiology-result';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('radiology-result.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseRadiologyResultId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseRadiologyResultPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseRadiologyResultListParams);
  });
});
