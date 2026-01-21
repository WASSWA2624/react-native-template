/**
 * PACS Link Rules
 * File: pacs-link.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePacsLinkId = (value) => parseId(value);
const parsePacsLinkPayload = (value) => parsePayload(value);
const parsePacsLinkListParams = (value) => parseListParams(value);

export { parsePacsLinkId, parsePacsLinkPayload, parsePacsLinkListParams };
