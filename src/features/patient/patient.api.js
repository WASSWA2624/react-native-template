/**
 * Patient API
 * File: patient.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const patientApi = createCrudApi(endpoints.PATIENTS);

export { patientApi };
