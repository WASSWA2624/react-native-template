/**
 * Subscription API
 * File: subscription.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const subscriptionApi = createCrudApi(endpoints.SUBSCRIPTIONS);

export { subscriptionApi };
