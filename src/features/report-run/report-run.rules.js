/**
 * Report Run Rules
 * File: report-run.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseReportRunId = (value) => parseId(value);
const parseReportRunPayload = (value) => parsePayload(value);
const parseReportRunListParams = (value) => parseListParams(value);

export { parseReportRunId, parseReportRunPayload, parseReportRunListParams };
