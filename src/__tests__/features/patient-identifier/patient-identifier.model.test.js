/**
 * Patient Identifier Model Tests
 * File: patient-identifier.model.test.js
 */
import { normalizePatientIdentifier, normalizePatientIdentifierList } from '@features/patient-identifier';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('patient-identifier.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePatientIdentifier, normalizePatientIdentifierList);
  });
});
