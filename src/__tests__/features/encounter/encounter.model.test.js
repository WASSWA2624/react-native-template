/**
 * Encounter Model Tests
 * File: encounter.model.test.js
 */
import { normalizeEncounter, normalizeEncounterList } from '@features/encounter';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('encounter.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeEncounter, normalizeEncounterList);
  });
});
