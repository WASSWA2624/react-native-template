/**
 * Module Model
 * File: module.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeModule = (value) => normalize(value);
const normalizeModuleList = (value) => normalizeList(value);

export { normalizeModule, normalizeModuleList };
