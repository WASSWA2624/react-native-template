/**
 * PACS Link API Tests
 * File: pacs-link.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { pacsLinkApi } from '@features/pacs-link/pacs-link.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('pacs-link.api', () => {
  it('creates crud api with pacs link endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PACS_LINKS);
    expect(pacsLinkApi).toBeDefined();
  });
});
