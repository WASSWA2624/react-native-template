/**
 * Invoice Usecase Tests
 * File: invoice.usecase.test.js
 */
import {
  listInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} from '@features/invoice';
import { invoiceApi } from '@features/invoice/invoice.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/invoice/invoice.api', () => ({
  invoiceApi: {
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

describe('invoice.usecase', () => {
  beforeEach(() => {
    invoiceApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    invoiceApi.get.mockResolvedValue({ data: { id: '1' } });
    invoiceApi.create.mockResolvedValue({ data: { id: '1' } });
    invoiceApi.update.mockResolvedValue({ data: { id: '1' } });
    invoiceApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listInvoices,
      get: getInvoice,
      create: createInvoice,
      update: updateInvoice,
      remove: deleteInvoice,
    },
    { queueRequestIfOffline }
  );
});
