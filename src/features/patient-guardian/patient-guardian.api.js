/**
 * Patient Guardian API
 * File: patient-guardian.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const patientGuardianApi = createCrudApi(endpoints.PATIENT_GUARDIANS);

export { patientGuardianApi };
