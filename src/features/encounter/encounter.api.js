/**
 * Encounter API
 * File: encounter.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const encounterApi = createCrudApi(endpoints.ENCOUNTERS);

export { encounterApi };
