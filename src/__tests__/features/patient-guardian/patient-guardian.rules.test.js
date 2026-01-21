/**
 * Patient Guardian Rules Tests
 * File: patient-guardian.rules.test.js
 */
import {
  parsePatientGuardianId,
  parsePatientGuardianListParams,
  parsePatientGuardianPayload,
} from '@features/patient-guardian';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('patient-guardian.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePatientGuardianId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePatientGuardianPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePatientGuardianListParams);
  });
});
