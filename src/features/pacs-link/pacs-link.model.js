/**
 * PACS Link Model
 * File: pacs-link.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePacsLink = (value) => normalize(value);
const normalizePacsLinkList = (value) => normalizeList(value);

export { normalizePacsLink, normalizePacsLinkList };
