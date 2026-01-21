/**
 * Admission API
 * File: admission.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const admissionApi = createCrudApi(endpoints.ADMISSIONS);

export { admissionApi };
