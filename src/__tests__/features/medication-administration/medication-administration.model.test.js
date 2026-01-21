/**
 * Medication Administration Model Tests
 * File: medication-administration.model.test.js
 */
import {
  normalizeMedicationAdministration,
  normalizeMedicationAdministrationList,
} from '@features/medication-administration';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('medication-administration.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeMedicationAdministration, normalizeMedicationAdministrationList);
  });
});
