/**
 * Subscription Plan API
 * File: subscription-plan.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const subscriptionPlanApi = createCrudApi(endpoints.SUBSCRIPTION_PLANS);

export { subscriptionPlanApi };
