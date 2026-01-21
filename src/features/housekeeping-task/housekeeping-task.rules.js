/**
 * Housekeeping Task Rules
 * File: housekeeping-task.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseHousekeepingTaskId = (value) => parseId(value);
const parseHousekeepingTaskPayload = (value) => parsePayload(value);
const parseHousekeepingTaskListParams = (value) => parseListParams(value);

export {
  parseHousekeepingTaskId,
  parseHousekeepingTaskPayload,
  parseHousekeepingTaskListParams,
};
