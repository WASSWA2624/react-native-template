/**
 * Asset Rules
 * File: asset.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseAssetId = (value) => parseId(value);
const parseAssetPayload = (value) => parsePayload(value);
const parseAssetListParams = (value) => parseListParams(value);

export { parseAssetId, parseAssetPayload, parseAssetListParams };
