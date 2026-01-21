/**
 * Patient Rules Tests
 * File: patient.rules.test.js
 */
import { parsePatientId, parsePatientListParams, parsePatientPayload } from '@features/patient';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('patient.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePatientId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePatientPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePatientListParams);
  });
});
