/**
 * Patient Document Model Tests
 * File: patient-document.model.test.js
 */
import { normalizePatientDocument, normalizePatientDocumentList } from '@features/patient-document';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('patient-document.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePatientDocument, normalizePatientDocumentList);
  });
});
