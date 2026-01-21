/**
 * Patient Document API
 * File: patient-document.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const patientDocumentApi = createCrudApi(endpoints.PATIENT_DOCUMENTS);

export { patientDocumentApi };
