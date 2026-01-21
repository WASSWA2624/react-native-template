/**
 * Diagnosis API
 * File: diagnosis.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const diagnosisApi = createCrudApi(endpoints.DIAGNOSES);

export { diagnosisApi };
