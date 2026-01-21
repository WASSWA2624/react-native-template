/**
 * useClinicalAlert Hook Tests
 * File: useClinicalAlert.test.js
 */
import useClinicalAlert from '@hooks/useClinicalAlert';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useClinicalAlert', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useClinicalAlert);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
