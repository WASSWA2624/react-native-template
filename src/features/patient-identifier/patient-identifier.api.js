/**
 * Patient Identifier API
 * File: patient-identifier.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const patientIdentifierApi = createCrudApi(endpoints.PATIENT_IDENTIFIERS);

export { patientIdentifierApi };
