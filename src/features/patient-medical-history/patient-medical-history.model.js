/**
 * Patient Medical History Model
 * File: patient-medical-history.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePatientMedicalHistory = (value) => normalize(value);
const normalizePatientMedicalHistoryList = (value) => normalizeList(value);

export { normalizePatientMedicalHistory, normalizePatientMedicalHistoryList };
