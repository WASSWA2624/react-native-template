/**
 * Consent API
 * File: consent.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const consentApi = createCrudApi(endpoints.CONSENTS);

export { consentApi };
