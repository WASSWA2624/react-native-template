/**
 * Invoice Item Use Cases
 * File: invoice-item.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { invoiceItemApi } from './invoice-item.api';
import { normalizeInvoiceItem, normalizeInvoiceItemList } from './invoice-item.model';
import {
  parseInvoiceItemId,
  parseInvoiceItemListParams,
  parseInvoiceItemPayload,
} from './invoice-item.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listInvoiceItems = async (params = {}) =>
  execute(async () => {
    const parsed = parseInvoiceItemListParams(params);
    const response = await invoiceItemApi.list(parsed);
    return normalizeInvoiceItemList(response.data);
  });

const getInvoiceItem = async (id) =>
  execute(async () => {
    const parsedId = parseInvoiceItemId(id);
    const response = await invoiceItemApi.get(parsedId);
    return normalizeInvoiceItem(response.data);
  });

const createInvoiceItem = async (payload) =>
  execute(async () => {
    const parsed = parseInvoiceItemPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.INVOICE_ITEMS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeInvoiceItem(parsed);
    }
    const response = await invoiceItemApi.create(parsed);
    return normalizeInvoiceItem(response.data);
  });

const updateInvoiceItem = async (id, payload) =>
  execute(async () => {
    const parsedId = parseInvoiceItemId(id);
    const parsed = parseInvoiceItemPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.INVOICE_ITEMS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeInvoiceItem({ id: parsedId, ...parsed });
    }
    const response = await invoiceItemApi.update(parsedId, parsed);
    return normalizeInvoiceItem(response.data);
  });

const deleteInvoiceItem = async (id) =>
  execute(async () => {
    const parsedId = parseInvoiceItemId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.INVOICE_ITEMS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeInvoiceItem({ id: parsedId });
    }
    const response = await invoiceItemApi.remove(parsedId);
    return normalizeInvoiceItem(response.data);
  });

export {
  listInvoiceItems,
  getInvoiceItem,
  createInvoiceItem,
  updateInvoiceItem,
  deleteInvoiceItem,
};
