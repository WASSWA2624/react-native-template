/**
 * Patient Allergy Rules Tests
 * File: patient-allergy.rules.test.js
 */
import {
  parsePatientAllergyId,
  parsePatientAllergyListParams,
  parsePatientAllergyPayload,
} from '@features/patient-allergy';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('patient-allergy.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePatientAllergyId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePatientAllergyPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePatientAllergyListParams);
  });
});
