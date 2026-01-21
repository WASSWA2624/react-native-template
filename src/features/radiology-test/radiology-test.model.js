/**
 * Radiology Test Model
 * File: radiology-test.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeRadiologyTest = (value) => normalize(value);
const normalizeRadiologyTestList = (value) => normalizeList(value);

export { normalizeRadiologyTest, normalizeRadiologyTestList };
