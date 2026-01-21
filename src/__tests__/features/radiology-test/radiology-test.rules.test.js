/**
 * Radiology Test Rules Tests
 * File: radiology-test.rules.test.js
 */
import { parseRadiologyTestId, parseRadiologyTestListParams, parseRadiologyTestPayload } from '@features/radiology-test';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('radiology-test.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseRadiologyTestId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseRadiologyTestPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseRadiologyTestListParams);
  });
});
