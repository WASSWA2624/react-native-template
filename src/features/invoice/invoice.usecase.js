/**
 * Invoice Use Cases
 * File: invoice.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { invoiceApi } from './invoice.api';
import { normalizeInvoice, normalizeInvoiceList } from './invoice.model';
import { parseInvoiceId, parseInvoiceListParams, parseInvoicePayload } from './invoice.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listInvoices = async (params = {}) =>
  execute(async () => {
    const parsed = parseInvoiceListParams(params);
    const response = await invoiceApi.list(parsed);
    return normalizeInvoiceList(response.data);
  });

const getInvoice = async (id) =>
  execute(async () => {
    const parsedId = parseInvoiceId(id);
    const response = await invoiceApi.get(parsedId);
    return normalizeInvoice(response.data);
  });

const createInvoice = async (payload) =>
  execute(async () => {
    const parsed = parseInvoicePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.INVOICES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeInvoice(parsed);
    }
    const response = await invoiceApi.create(parsed);
    return normalizeInvoice(response.data);
  });

const updateInvoice = async (id, payload) =>
  execute(async () => {
    const parsedId = parseInvoiceId(id);
    const parsed = parseInvoicePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.INVOICES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeInvoice({ id: parsedId, ...parsed });
    }
    const response = await invoiceApi.update(parsedId, parsed);
    return normalizeInvoice(response.data);
  });

const deleteInvoice = async (id) =>
  execute(async () => {
    const parsedId = parseInvoiceId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.INVOICES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeInvoice({ id: parsedId });
    }
    const response = await invoiceApi.remove(parsedId);
    return normalizeInvoice(response.data);
  });

export { listInvoices, getInvoice, createInvoice, updateInvoice, deleteInvoice };
