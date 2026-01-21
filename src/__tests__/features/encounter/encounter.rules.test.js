/**
 * Encounter Rules Tests
 * File: encounter.rules.test.js
 */
import { parseEncounterId, parseEncounterListParams, parseEncounterPayload } from '@features/encounter';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('encounter.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseEncounterId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseEncounterPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseEncounterListParams);
  });
});
