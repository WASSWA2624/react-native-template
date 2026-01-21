/**
 * Report Definition API
 * File: report-definition.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const reportDefinitionApi = createCrudApi(endpoints.REPORT_DEFINITIONS);

export { reportDefinitionApi };
