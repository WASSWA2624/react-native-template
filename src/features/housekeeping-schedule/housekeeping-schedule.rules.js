/**
 * Housekeeping Schedule Rules
 * File: housekeeping-schedule.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseHousekeepingScheduleId = (value) => parseId(value);
const parseHousekeepingSchedulePayload = (value) => parsePayload(value);
const parseHousekeepingScheduleListParams = (value) => parseListParams(value);

export {
  parseHousekeepingScheduleId,
  parseHousekeepingSchedulePayload,
  parseHousekeepingScheduleListParams,
};
