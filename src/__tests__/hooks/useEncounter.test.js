/**
 * useEncounter Hook Tests
 * File: useEncounter.test.js
 */
import useEncounter from '@hooks/useEncounter';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useEncounter', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useEncounter);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
