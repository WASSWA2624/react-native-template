/**
 * Patient Medical History API
 * File: patient-medical-history.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const patientMedicalHistoryApi = createCrudApi(endpoints.PATIENT_MEDICAL_HISTORIES);

export { patientMedicalHistoryApi };
