/**
 * Template Variable API Tests
 * File: template-variable.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { templateVariableApi } from '@features/template-variable/template-variable.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('template-variable.api', () => {
  it('creates crud api with template variable endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.TEMPLATE_VARIABLES);
    expect(templateVariableApi).toBeDefined();
  });
});
