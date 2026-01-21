/**
 * Anesthesia Record Model
 * File: anesthesia-record.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeAnesthesiaRecord = (value) => normalize(value);
const normalizeAnesthesiaRecordList = (value) => normalizeList(value);

export { normalizeAnesthesiaRecord, normalizeAnesthesiaRecordList };
