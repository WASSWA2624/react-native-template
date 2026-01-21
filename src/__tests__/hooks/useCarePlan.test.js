/**
 * useCarePlan Hook Tests
 * File: useCarePlan.test.js
 */
import useCarePlan from '@hooks/useCarePlan';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useCarePlan', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useCarePlan);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
