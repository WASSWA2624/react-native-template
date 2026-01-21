/**
 * Patient Allergy API
 * File: patient-allergy.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const patientAllergyApi = createCrudApi(endpoints.PATIENT_ALLERGIES);

export { patientAllergyApi };
