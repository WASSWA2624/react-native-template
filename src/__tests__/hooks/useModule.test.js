/**
 * useModule Hook Tests
 * File: useModule.test.js
 */
import useModule from '@hooks/useModule';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useModule', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useModule);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
