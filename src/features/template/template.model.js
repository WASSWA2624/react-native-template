/**
 * Template Model
 * File: template.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeTemplate = (value) => normalize(value);
const normalizeTemplateList = (value) => normalizeList(value);

export { normalizeTemplate, normalizeTemplateList };
