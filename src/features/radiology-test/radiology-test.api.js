/**
 * Radiology Test API
 * File: radiology-test.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const radiologyTestApi = createCrudApi(endpoints.RADIOLOGY_TESTS);

export { radiologyTestApi };
