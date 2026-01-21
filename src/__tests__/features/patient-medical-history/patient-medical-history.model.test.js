/**
 * Patient Medical History Model Tests
 * File: patient-medical-history.model.test.js
 */
import {
  normalizePatientMedicalHistory,
  normalizePatientMedicalHistoryList,
} from '@features/patient-medical-history';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('patient-medical-history.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePatientMedicalHistory, normalizePatientMedicalHistoryList);
  });
});
