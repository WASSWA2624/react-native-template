/**
 * Module Subscription API
 * File: module-subscription.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const moduleSubscriptionApi = createCrudApi(endpoints.MODULE_SUBSCRIPTIONS);

export { moduleSubscriptionApi };
