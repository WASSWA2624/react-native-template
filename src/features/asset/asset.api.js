/**
 * Asset API
 * File: asset.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const assetApi = createCrudApi(endpoints.ASSETS);

export { assetApi };
