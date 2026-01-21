/**
 * Patient Identifier Rules Tests
 * File: patient-identifier.rules.test.js
 */
import {
  parsePatientIdentifierId,
  parsePatientIdentifierListParams,
  parsePatientIdentifierPayload,
} from '@features/patient-identifier';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('patient-identifier.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePatientIdentifierId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePatientIdentifierPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePatientIdentifierListParams);
  });
});
