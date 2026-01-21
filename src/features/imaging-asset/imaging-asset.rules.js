/**
 * Imaging Asset Rules
 * File: imaging-asset.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseImagingAssetId = (value) => parseId(value);
const parseImagingAssetPayload = (value) => parsePayload(value);
const parseImagingAssetListParams = (value) => parseListParams(value);

export { parseImagingAssetId, parseImagingAssetPayload, parseImagingAssetListParams };
