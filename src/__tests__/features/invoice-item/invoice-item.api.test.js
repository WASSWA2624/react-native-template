/**
 * Invoice Item API Tests
 * File: invoice-item.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { invoiceItemApi } from '@features/invoice-item/invoice-item.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('invoice-item.api', () => {
  it('creates crud api with invoice item endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.INVOICE_ITEMS);
    expect(invoiceItemApi).toBeDefined();
  });
});
