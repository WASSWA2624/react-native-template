/**
 * Analytics Event Rules
 * File: analytics-event.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseAnalyticsEventId = (value) => parseId(value);
const parseAnalyticsEventPayload = (value) => parsePayload(value);
const parseAnalyticsEventListParams = (value) => parseListParams(value);

export {
  parseAnalyticsEventId,
  parseAnalyticsEventPayload,
  parseAnalyticsEventListParams,
};
