/**
 * Template API Tests
 * File: template.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { templateApi } from '@features/template/template.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('template.api', () => {
  it('creates crud api with template endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.TEMPLATES);
    expect(templateApi).toBeDefined();
  });
});
