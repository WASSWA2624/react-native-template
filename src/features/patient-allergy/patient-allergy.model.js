/**
 * Patient Allergy Model
 * File: patient-allergy.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePatientAllergy = (value) => normalize(value);
const normalizePatientAllergyList = (value) => normalizeList(value);

export { normalizePatientAllergy, normalizePatientAllergyList };
