/**
 * Ward Round Rules
 * File: ward-round.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseWardRoundId = (value) => parseId(value);
const parseWardRoundPayload = (value) => parsePayload(value);
const parseWardRoundListParams = (value) => parseListParams(value);

export { parseWardRoundId, parseWardRoundPayload, parseWardRoundListParams };
