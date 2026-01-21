/**
 * Discharge Summary API
 * File: discharge-summary.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const dischargeSummaryApi = createCrudApi(endpoints.DISCHARGE_SUMMARIES);

export { dischargeSummaryApi };
