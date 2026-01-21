/**
 * Housekeeping Schedule API
 * File: housekeeping-schedule.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const housekeepingScheduleApi = createCrudApi(endpoints.HOUSEKEEPING_SCHEDULES);

export { housekeepingScheduleApi };
