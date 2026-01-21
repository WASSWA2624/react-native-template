/**
 * PACS Link Model Tests
 * File: pacs-link.model.test.js
 */
import { normalizePacsLink, normalizePacsLinkList } from '@features/pacs-link';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('pacs-link.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePacsLink, normalizePacsLinkList);
  });
});
