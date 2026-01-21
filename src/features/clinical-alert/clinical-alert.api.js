/**
 * Clinical Alert API
 * File: clinical-alert.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const clinicalAlertApi = createCrudApi(endpoints.CLINICAL_ALERTS);

export { clinicalAlertApi };
