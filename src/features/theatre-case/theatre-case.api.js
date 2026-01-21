/**
 * Theatre Case API
 * File: theatre-case.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const theatreCaseApi = createCrudApi(endpoints.THEATRE_CASES);

export { theatreCaseApi };
