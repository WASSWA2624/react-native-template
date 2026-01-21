/**
 * Asset Service Log Rules
 * File: asset-service-log.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseAssetServiceLogId = (value) => parseId(value);
const parseAssetServiceLogPayload = (value) => parsePayload(value);
const parseAssetServiceLogListParams = (value) => parseListParams(value);

export {
  parseAssetServiceLogId,
  parseAssetServiceLogPayload,
  parseAssetServiceLogListParams,
};
