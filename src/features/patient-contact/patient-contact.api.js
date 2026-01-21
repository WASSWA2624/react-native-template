/**
 * Patient Contact API
 * File: patient-contact.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const patientContactApi = createCrudApi(endpoints.PATIENT_CONTACTS);

export { patientContactApi };
