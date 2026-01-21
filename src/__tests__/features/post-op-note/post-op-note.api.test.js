/**
 * Post-Op Note API Tests
 * File: post-op-note.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { postOpNoteApi } from '@features/post-op-note/post-op-note.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('post-op-note.api', () => {
  it('creates crud api with post-op note endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.POST_OP_NOTES);
    expect(postOpNoteApi).toBeDefined();
  });
});
