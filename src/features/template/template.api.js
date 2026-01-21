/**
 * Template API
 * File: template.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const templateApi = createCrudApi(endpoints.TEMPLATES);

export { templateApi };
