/**
 * PACS Link API
 * File: pacs-link.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const pacsLinkApi = createCrudApi(endpoints.PACS_LINKS);

export { pacsLinkApi };
