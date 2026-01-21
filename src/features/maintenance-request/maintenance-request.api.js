/**
 * Maintenance Request API
 * File: maintenance-request.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const maintenanceRequestApi = createCrudApi(endpoints.MAINTENANCE_REQUESTS);

export { maintenanceRequestApi };
