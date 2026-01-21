/**
 * Asset Model
 * File: asset.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeAsset = (value) => normalize(value);
const normalizeAssetList = (value) => normalizeList(value);

export { normalizeAsset, normalizeAssetList };
