/**
 * Vital Sign Model
 * File: vital-sign.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeVitalSign = (value) => normalize(value);
const normalizeVitalSignList = (value) => normalizeList(value);

export { normalizeVitalSign, normalizeVitalSignList };
