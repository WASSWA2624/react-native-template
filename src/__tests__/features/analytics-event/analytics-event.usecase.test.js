/**
 * Analytics Event Usecase Tests
 * File: analytics-event.usecase.test.js
 */
import {
  listAnalyticsEvents,
  getAnalyticsEvent,
  createAnalyticsEvent,
  updateAnalyticsEvent,
  deleteAnalyticsEvent,
} from '@features/analytics-event';
import { analyticsEventApi } from '@features/analytics-event/analytics-event.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/analytics-event/analytics-event.api', () => ({
  analyticsEventApi: {
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

describe('analytics-event.usecase', () => {
  beforeEach(() => {
    analyticsEventApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    analyticsEventApi.get.mockResolvedValue({ data: { id: '1' } });
    analyticsEventApi.create.mockResolvedValue({ data: { id: '1' } });
    analyticsEventApi.update.mockResolvedValue({ data: { id: '1' } });
    analyticsEventApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listAnalyticsEvents,
      get: getAnalyticsEvent,
      create: createAnalyticsEvent,
      update: updateAnalyticsEvent,
      remove: deleteAnalyticsEvent,
    },
    { queueRequestIfOffline }
  );
});
