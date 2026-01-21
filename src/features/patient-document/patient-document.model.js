/**
 * Patient Document Model
 * File: patient-document.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePatientDocument = (value) => normalize(value);
const normalizePatientDocumentList = (value) => normalizeList(value);

export { normalizePatientDocument, normalizePatientDocumentList };
