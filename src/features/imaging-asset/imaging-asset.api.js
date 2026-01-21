/**
 * Imaging Asset API
 * File: imaging-asset.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const imagingAssetApi = createCrudApi(endpoints.IMAGING_ASSETS);

export { imagingAssetApi };
