/**
 * Integration Model
 * File: integration.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeIntegration = (value) => normalize(value);
const normalizeIntegrationList = (value) => normalizeList(value);

export { normalizeIntegration, normalizeIntegrationList };
