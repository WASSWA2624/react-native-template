/**
 * useLicense Hook Tests
 * File: useLicense.test.js
 */
import useLicense from '@hooks/useLicense';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useLicense', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useLicense);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
