/**
 * Maintenance Request Rules
 * File: maintenance-request.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseMaintenanceRequestId = (value) => parseId(value);
const parseMaintenanceRequestPayload = (value) => parsePayload(value);
const parseMaintenanceRequestListParams = (value) => parseListParams(value);

export {
  parseMaintenanceRequestId,
  parseMaintenanceRequestPayload,
  parseMaintenanceRequestListParams,
};
