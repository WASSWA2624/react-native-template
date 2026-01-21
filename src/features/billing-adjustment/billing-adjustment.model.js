/**
 * Billing Adjustment Model
 * File: billing-adjustment.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeBillingAdjustment = (value) => normalize(value);
const normalizeBillingAdjustmentList = (value) => normalizeList(value);

export { normalizeBillingAdjustment, normalizeBillingAdjustmentList };
