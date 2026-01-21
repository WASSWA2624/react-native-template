/**
 * Vital Sign API
 * File: vital-sign.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const vitalSignApi = createCrudApi(endpoints.VITAL_SIGNS);

export { vitalSignApi };
