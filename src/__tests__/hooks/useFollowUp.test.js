/**
 * useFollowUp Hook Tests
 * File: useFollowUp.test.js
 */
import useFollowUp from '@hooks/useFollowUp';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useFollowUp', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useFollowUp);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
