/**
 * Ward Round Model
 * File: ward-round.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeWardRound = (value) => normalize(value);
const normalizeWardRoundList = (value) => normalizeList(value);

export { normalizeWardRound, normalizeWardRoundList };
