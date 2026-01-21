/**
 * Terms Acceptance Model
 * File: terms-acceptance.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeTermsAcceptance = (value) => normalize(value);
const normalizeTermsAcceptanceList = (value) => normalizeList(value);

export { normalizeTermsAcceptance, normalizeTermsAcceptanceList };
