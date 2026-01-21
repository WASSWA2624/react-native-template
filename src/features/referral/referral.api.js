/**
 * Referral API
 * File: referral.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const referralApi = createCrudApi(endpoints.REFERRALS);

export { referralApi };
