/**
 * useClinicalNote Hook Tests
 * File: useClinicalNote.test.js
 */
import useClinicalNote from '@hooks/useClinicalNote';
import { expectCrudHook } from '../helpers/hook-assertions';
import { renderHookResult } from '../helpers/render-hook';

describe('useClinicalNote', () => {
  it('exposes CRUD handlers', () => {
    const result = renderHookResult(useClinicalNote);
    expectCrudHook(result, ['list', 'get', 'create', 'update', 'remove']);
  });
});
