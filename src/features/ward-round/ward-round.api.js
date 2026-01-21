/**
 * Ward Round API
 * File: ward-round.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const wardRoundApi = createCrudApi(endpoints.WARD_ROUNDS);

export { wardRoundApi };
