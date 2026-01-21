/**
 * Report Definition Model
 * File: report-definition.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeReportDefinition = (value) => normalize(value);
const normalizeReportDefinitionList = (value) => normalizeList(value);

export { normalizeReportDefinition, normalizeReportDefinitionList };
