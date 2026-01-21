/**
 * Maintenance Request Model Tests
 * File: maintenance-request.model.test.js
 */
import {
  normalizeMaintenanceRequest,
  normalizeMaintenanceRequestList,
} from '@features/maintenance-request';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('maintenance-request.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeMaintenanceRequest, normalizeMaintenanceRequestList);
  });
});
