/**
 * Procedure API
 * File: procedure.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const procedureApi = createCrudApi(endpoints.PROCEDURES);

export { procedureApi };
