/**
 * Patient Model Tests
 * File: patient.model.test.js
 */
import { normalizePatient, normalizePatientList } from '@features/patient';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('patient.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePatient, normalizePatientList);
  });
});
