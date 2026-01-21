/**
 * Nursing Note API Tests
 * File: nursing-note.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { nursingNoteApi } from '@features/nursing-note/nursing-note.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('nursing-note.api', () => {
  it('creates crud api with nursing note endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.NURSING_NOTES);
    expect(nursingNoteApi).toBeDefined();
  });
});
