/**
 * Diagnosis Model Tests
 * File: diagnosis.model.test.js
 */
import { normalizeDiagnosis, normalizeDiagnosisList } from '@features/diagnosis';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('diagnosis.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeDiagnosis, normalizeDiagnosisList);
  });
});
