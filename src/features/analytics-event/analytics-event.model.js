/**
 * Analytics Event Model
 * File: analytics-event.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeAnalyticsEvent = (value) => normalize(value);
const normalizeAnalyticsEventList = (value) => normalizeList(value);

export { normalizeAnalyticsEvent, normalizeAnalyticsEventList };
