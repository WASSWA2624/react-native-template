/**
 * Housekeeping Task Model Tests
 * File: housekeeping-task.model.test.js
 */
import { normalizeHousekeepingTask, normalizeHousekeepingTaskList } from '@features/housekeeping-task';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('housekeeping-task.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeHousekeepingTask, normalizeHousekeepingTaskList);
  });
});
