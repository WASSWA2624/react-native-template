/**
 * Template Variable API
 * File: template-variable.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const templateVariableApi = createCrudApi(endpoints.TEMPLATE_VARIABLES);

export { templateVariableApi };
