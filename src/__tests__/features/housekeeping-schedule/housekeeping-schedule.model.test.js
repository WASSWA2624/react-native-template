/**
 * Housekeeping Schedule Model Tests
 * File: housekeeping-schedule.model.test.js
 */
import {
  normalizeHousekeepingSchedule,
  normalizeHousekeepingScheduleList,
} from '@features/housekeeping-schedule';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('housekeeping-schedule.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeHousekeepingSchedule, normalizeHousekeepingScheduleList);
  });
});
