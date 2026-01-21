/**
 * useProcedure Hook Tests
 * File: useProcedure.test.js
 */
import useProcedure from '@hooks/useProcedure';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useProcedure', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useProcedure);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
