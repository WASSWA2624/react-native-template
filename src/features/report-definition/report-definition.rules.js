/**
 * Report Definition Rules
 * File: report-definition.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseReportDefinitionId = (value) => parseId(value);
const parseReportDefinitionPayload = (value) => parsePayload(value);
const parseReportDefinitionListParams = (value) => parseListParams(value);

export {
  parseReportDefinitionId,
  parseReportDefinitionPayload,
  parseReportDefinitionListParams,
};
