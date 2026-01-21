/**
 * Maintenance Request Model
 * File: maintenance-request.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeMaintenanceRequest = (value) => normalize(value);
const normalizeMaintenanceRequestList = (value) => normalizeList(value);

export { normalizeMaintenanceRequest, normalizeMaintenanceRequestList };
