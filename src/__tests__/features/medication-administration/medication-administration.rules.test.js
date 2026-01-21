/**
 * Medication Administration Rules Tests
 * File: medication-administration.rules.test.js
 */
import {
  parseMedicationAdministrationId,
  parseMedicationAdministrationListParams,
  parseMedicationAdministrationPayload,
} from '@features/medication-administration';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('medication-administration.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseMedicationAdministrationId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseMedicationAdministrationPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseMedicationAdministrationListParams);
  });
});
