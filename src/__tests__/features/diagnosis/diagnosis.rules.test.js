/**
 * Diagnosis Rules Tests
 * File: diagnosis.rules.test.js
 */
import { parseDiagnosisId, parseDiagnosisListParams, parseDiagnosisPayload } from '@features/diagnosis';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('diagnosis.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseDiagnosisId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseDiagnosisPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseDiagnosisListParams);
  });
});
