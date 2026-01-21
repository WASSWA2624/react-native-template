/**
 * Payment Model
 * File: payment.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePayment = (value) => normalize(value);
const normalizePaymentList = (value) => normalizeList(value);

export { normalizePayment, normalizePaymentList };
