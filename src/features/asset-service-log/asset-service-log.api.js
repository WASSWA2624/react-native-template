/**
 * Asset Service Log API
 * File: asset-service-log.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const assetServiceLogApi = createCrudApi(endpoints.ASSET_SERVICE_LOGS);

export { assetServiceLogApi };
