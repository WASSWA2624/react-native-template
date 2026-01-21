/**
 * Imaging Asset Model
 * File: imaging-asset.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeImagingAsset = (value) => normalize(value);
const normalizeImagingAssetList = (value) => normalizeList(value);

export { normalizeImagingAsset, normalizeImagingAssetList };
