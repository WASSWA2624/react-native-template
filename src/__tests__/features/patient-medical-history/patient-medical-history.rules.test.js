/**
 * Patient Medical History Rules Tests
 * File: patient-medical-history.rules.test.js
 */
import {
  parsePatientMedicalHistoryId,
  parsePatientMedicalHistoryListParams,
  parsePatientMedicalHistoryPayload,
} from '@features/patient-medical-history';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('patient-medical-history.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePatientMedicalHistoryId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePatientMedicalHistoryPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePatientMedicalHistoryListParams);
  });
});
