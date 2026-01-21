/**
 * Consent Model
 * File: consent.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeConsent = (value) => normalize(value);
const normalizeConsentList = (value) => normalizeList(value);

export { normalizeConsent, normalizeConsentList };
