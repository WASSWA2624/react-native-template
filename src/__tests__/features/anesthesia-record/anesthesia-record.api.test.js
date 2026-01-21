/**
 * Anesthesia Record API Tests
 * File: anesthesia-record.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { anesthesiaRecordApi } from '@features/anesthesia-record/anesthesia-record.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('anesthesia-record.api', () => {
  it('creates crud api with anesthesia record endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.ANESTHESIA_RECORDS);
    expect(anesthesiaRecordApi).toBeDefined();
  });
});
