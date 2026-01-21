/**
 * Admission Model Tests
 * File: admission.model.test.js
 */
import { normalizeAdmission, normalizeAdmissionList } from '@features/admission';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('admission.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeAdmission, normalizeAdmissionList);
  });
});
