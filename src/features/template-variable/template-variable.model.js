/**
 * Template Variable Model
 * File: template-variable.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeTemplateVariable = (value) => normalize(value);
const normalizeTemplateVariableList = (value) => normalizeList(value);

export { normalizeTemplateVariable, normalizeTemplateVariableList };
