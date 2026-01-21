/**
 * Patient Guardian Model Tests
 * File: patient-guardian.model.test.js
 */
import { normalizePatientGuardian, normalizePatientGuardianList } from '@features/patient-guardian';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('patient-guardian.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePatientGuardian, normalizePatientGuardianList);
  });
});
