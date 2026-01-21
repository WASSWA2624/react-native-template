/**
 * Integration Log Model
 * File: integration-log.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeIntegrationLog = (value) => normalize(value);
const normalizeIntegrationLogList = (value) => normalizeList(value);

export { normalizeIntegrationLog, normalizeIntegrationLogList };
