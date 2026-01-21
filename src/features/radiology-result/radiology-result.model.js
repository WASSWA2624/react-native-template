/**
 * Radiology Result Model
 * File: radiology-result.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeRadiologyResult = (value) => normalize(value);
const normalizeRadiologyResultList = (value) => normalizeList(value);

export { normalizeRadiologyResult, normalizeRadiologyResultList };
