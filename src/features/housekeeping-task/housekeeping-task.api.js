/**
 * Housekeeping Task API
 * File: housekeeping-task.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const housekeepingTaskApi = createCrudApi(endpoints.HOUSEKEEPING_TASKS);

export { housekeepingTaskApi };
