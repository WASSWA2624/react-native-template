/**
 * useTemplate Hook Tests
 * File: useTemplate.test.js
 */
import useTemplate from '@hooks/useTemplate';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useTemplate', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useTemplate);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
