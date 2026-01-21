/**
 * Care Plan API
 * File: care-plan.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const carePlanApi = createCrudApi(endpoints.CARE_PLANS);

export { carePlanApi };
