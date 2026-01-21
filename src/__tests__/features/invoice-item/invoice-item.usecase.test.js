/**
 * Invoice Item Usecase Tests
 * File: invoice-item.usecase.test.js
 */
import {
  listInvoiceItems,
  getInvoiceItem,
  createInvoiceItem,
  updateInvoiceItem,
  deleteInvoiceItem,
} from '@features/invoice-item';
import { invoiceItemApi } from '@features/invoice-item/invoice-item.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/invoice-item/invoice-item.api', () => ({
  invoiceItemApi: {
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  },
}));

jest.mock('@offline/request', () => ({
  queueRequestIfOffline: jest.fn(),
}));

describe('invoice-item.usecase', () => {
  beforeEach(() => {
    invoiceItemApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    invoiceItemApi.get.mockResolvedValue({ data: { id: '1' } });
    invoiceItemApi.create.mockResolvedValue({ data: { id: '1' } });
    invoiceItemApi.update.mockResolvedValue({ data: { id: '1' } });
    invoiceItemApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listInvoiceItems,
      get: getInvoiceItem,
      create: createInvoiceItem,
      update: updateInvoiceItem,
      remove: deleteInvoiceItem,
    },
    { queueRequestIfOffline }
  );
});
