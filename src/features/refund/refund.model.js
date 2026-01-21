/**
 * Refund Model
 * File: refund.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeRefund = (value) => normalize(value);
const normalizeRefundList = (value) => normalizeList(value);

export { normalizeRefund, normalizeRefundList };
