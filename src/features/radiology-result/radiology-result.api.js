/**
 * Radiology Result API
 * File: radiology-result.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const radiologyResultApi = createCrudApi(endpoints.RADIOLOGY_RESULTS);

export { radiologyResultApi };
