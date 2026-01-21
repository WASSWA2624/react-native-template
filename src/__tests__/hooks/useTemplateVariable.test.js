/**
 * useTemplateVariable Hook Tests
 * File: useTemplateVariable.test.js
 */
import useTemplateVariable from '@hooks/useTemplateVariable';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useTemplateVariable', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useTemplateVariable);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
