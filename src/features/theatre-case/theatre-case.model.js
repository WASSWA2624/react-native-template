/**
 * Theatre Case Model
 * File: theatre-case.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeTheatreCase = (value) => normalize(value);
const normalizeTheatreCaseList = (value) => normalizeList(value);

export { normalizeTheatreCase, normalizeTheatreCaseList };
