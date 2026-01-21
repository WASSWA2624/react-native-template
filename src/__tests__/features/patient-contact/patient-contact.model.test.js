/**
 * Patient Contact Model Tests
 * File: patient-contact.model.test.js
 */
import { normalizePatientContact, normalizePatientContactList } from '@features/patient-contact';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('patient-contact.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePatientContact, normalizePatientContactList);
  });
});
