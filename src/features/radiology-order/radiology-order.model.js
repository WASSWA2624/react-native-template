/**
 * Radiology Order Model
 * File: radiology-order.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeRadiologyOrder = (value) => normalize(value);
const normalizeRadiologyOrderList = (value) => normalizeList(value);

export { normalizeRadiologyOrder, normalizeRadiologyOrderList };
