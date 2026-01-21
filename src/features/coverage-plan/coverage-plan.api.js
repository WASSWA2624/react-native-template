/**
 * Coverage Plan API
 * File: coverage-plan.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const coveragePlanApi = createCrudApi(endpoints.COVERAGE_PLANS);

export { coveragePlanApi };
