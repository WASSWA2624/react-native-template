/**
 * Patient Contact Model
 * File: patient-contact.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePatientContact = (value) => normalize(value);
const normalizePatientContactList = (value) => normalizeList(value);

export { normalizePatientContact, normalizePatientContactList };
