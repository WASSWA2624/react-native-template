/**
 * useVitalSign Hook Tests
 * File: useVitalSign.test.js
 */
import useVitalSign from '@hooks/useVitalSign';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useVitalSign', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useVitalSign);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
