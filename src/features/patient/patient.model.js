/**
 * Patient Model
 * File: patient.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePatient = (value) => normalize(value);
const normalizePatientList = (value) => normalizeList(value);

export { normalizePatient, normalizePatientList };
