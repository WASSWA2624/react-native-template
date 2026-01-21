/**
 * Terms Acceptance API
 * File: terms-acceptance.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const termsAcceptanceApi = createCrudApi(endpoints.TERMS_ACCEPTANCES);

export { termsAcceptanceApi };
