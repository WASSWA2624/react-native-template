/**
 * Clinical Alert Model
 * File: clinical-alert.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeClinicalAlert = (value) => normalize(value);
const normalizeClinicalAlertList = (value) => normalizeList(value);

export { normalizeClinicalAlert, normalizeClinicalAlertList };
