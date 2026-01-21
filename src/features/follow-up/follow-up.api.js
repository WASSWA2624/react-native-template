/**
 * Follow Up API
 * File: follow-up.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const followUpApi = createCrudApi(endpoints.FOLLOW_UPS);

export { followUpApi };
