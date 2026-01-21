/**
 * Housekeeping Schedule Model
 * File: housekeeping-schedule.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeHousekeepingSchedule = (value) => normalize(value);
const normalizeHousekeepingScheduleList = (value) => normalizeList(value);

export { normalizeHousekeepingSchedule, normalizeHousekeepingScheduleList };
