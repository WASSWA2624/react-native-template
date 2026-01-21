/**
 * Patient Allergy Model Tests
 * File: patient-allergy.model.test.js
 */
import { normalizePatientAllergy, normalizePatientAllergyList } from '@features/patient-allergy';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('patient-allergy.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePatientAllergy, normalizePatientAllergyList);
  });
});
