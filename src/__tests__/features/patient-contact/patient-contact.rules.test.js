/**
 * Patient Contact Rules Tests
 * File: patient-contact.rules.test.js
 */
import {
  parsePatientContactId,
  parsePatientContactListParams,
  parsePatientContactPayload,
} from '@features/patient-contact';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('patient-contact.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePatientContactId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePatientContactPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePatientContactListParams);
  });
});
