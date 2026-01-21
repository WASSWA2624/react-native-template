/**
 * Patient Identifier Model
 * File: patient-identifier.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePatientIdentifier = (value) => normalize(value);
const normalizePatientIdentifierList = (value) => normalizeList(value);

export { normalizePatientIdentifier, normalizePatientIdentifierList };
