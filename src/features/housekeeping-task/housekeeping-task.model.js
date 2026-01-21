/**
 * Housekeeping Task Model
 * File: housekeeping-task.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeHousekeepingTask = (value) => normalize(value);
const normalizeHousekeepingTaskList = (value) => normalizeList(value);

export { normalizeHousekeepingTask, normalizeHousekeepingTaskList };
