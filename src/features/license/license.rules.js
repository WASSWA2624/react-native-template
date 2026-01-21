/**
 * License Rules
 * File: license.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseLicenseId = (value) => parseId(value);
const parseLicensePayload = (value) => parsePayload(value);
const parseLicenseListParams = (value) => parseListParams(value);

export { parseLicenseId, parseLicensePayload, parseLicenseListParams };
