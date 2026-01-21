/**
 * Analytics Event API
 * File: analytics-event.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const analyticsEventApi = createCrudApi(endpoints.ANALYTICS_EVENTS);

export { analyticsEventApi };
