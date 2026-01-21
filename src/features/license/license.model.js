/**
 * License Model
 * File: license.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeLicense = (value) => normalize(value);
const normalizeLicenseList = (value) => normalizeList(value);

export { normalizeLicense, normalizeLicenseList };
