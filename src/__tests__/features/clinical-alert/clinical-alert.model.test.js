/**
 * Clinical Alert Model Tests
 * File: clinical-alert.model.test.js
 */
import { normalizeClinicalAlert, normalizeClinicalAlertList } from '@features/clinical-alert';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('clinical-alert.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeClinicalAlert, normalizeClinicalAlertList);
  });
});
