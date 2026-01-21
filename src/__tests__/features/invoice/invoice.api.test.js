/**
 * Invoice API Tests
 * File: invoice.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { invoiceApi } from '@features/invoice/invoice.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('invoice.api', () => {
  it('creates crud api with invoice endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.INVOICES);
    expect(invoiceApi).toBeDefined();
  });
});
