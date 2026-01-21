/**
 * Referral Model
 * File: referral.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeReferral = (value) => normalize(value);
const normalizeReferralList = (value) => normalizeList(value);

export { normalizeReferral, normalizeReferralList };
