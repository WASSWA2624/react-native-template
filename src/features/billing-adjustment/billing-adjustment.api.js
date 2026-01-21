/**
 * Billing Adjustment API
 * File: billing-adjustment.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const billingAdjustmentApi = createCrudApi(endpoints.BILLING_ADJUSTMENTS);

export { billingAdjustmentApi };
