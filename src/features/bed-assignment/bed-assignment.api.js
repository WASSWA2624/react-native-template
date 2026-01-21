/**
 * Bed Assignment API
 * File: bed-assignment.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const bedAssignmentApi = createCrudApi(endpoints.BED_ASSIGNMENTS);

export { bedAssignmentApi };
