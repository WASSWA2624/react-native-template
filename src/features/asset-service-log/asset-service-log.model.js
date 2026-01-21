/**
 * Asset Service Log Model
 * File: asset-service-log.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeAssetServiceLog = (value) => normalize(value);
const normalizeAssetServiceLogList = (value) => normalizeList(value);

export { normalizeAssetServiceLog, normalizeAssetServiceLogList };
