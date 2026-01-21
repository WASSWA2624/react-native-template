/**
 * useNotificationDelivery Hook Tests
 * File: useNotificationDelivery.test.js
 */
import useNotificationDelivery from '@hooks/useNotificationDelivery';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useNotificationDelivery', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useNotificationDelivery);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
