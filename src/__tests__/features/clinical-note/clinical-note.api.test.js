/**
 * Clinical Note API Tests
 * File: clinical-note.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { clinicalNoteApi } from '@features/clinical-note/clinical-note.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('clinical-note.api', () => {
  it('creates crud api with clinical note endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.CLINICAL_NOTES);
    expect(clinicalNoteApi).toBeDefined();
  });
});
