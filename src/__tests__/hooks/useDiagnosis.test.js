/**
 * useDiagnosis Hook Tests
 * File: useDiagnosis.test.js
 */
import useDiagnosis from '@hooks/useDiagnosis';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useDiagnosis', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useDiagnosis);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
