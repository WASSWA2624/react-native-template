/**
 * Notification Usecase Tests
 * File: notification.usecase.test.js
 */
import {
  getNotification,
  getNotificationPreferences,
  listNotifications,
  listNotificationTargets,
  markNotificationRead,
  markNotificationUnread,
  updateNotificationPreferences,
} from '@features/notification';
import {
  getNotificationPreferencesApi,
  getNotificationTargetsApi,
  markNotificationReadApi,
  markNotificationUnreadApi,
  notificationApi,
  updateNotificationPreferencesApi,
} from '@features/notification/notification.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/notification/notification.api', () => ({
  notificationApi: {
    list: jest.fn(),
    get: jest.fn(),
  },
  markNotificationReadApi: jest.fn(),
  markNotificationUnreadApi: jest.fn(),
  getNotificationTargetsApi: jest.fn(),
  getNotificationPreferencesApi: jest.fn(),
  updateNotificationPreferencesApi: jest.fn(),
}));

jest.mock('@offline/request', () => ({
  queueRequestIfOffline: jest.fn(),
}));

describe('notification.usecase', () => {
  beforeEach(() => {
    notificationApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    notificationApi.get.mockResolvedValue({ data: { id: '1' } });
    markNotificationReadApi.mockResolvedValue({ data: { id: '1', read: true } });
    markNotificationUnreadApi.mockResolvedValue({ data: { id: '1', read: false } });
    getNotificationTargetsApi.mockResolvedValue({ data: [{ id: 't1' }] });
    getNotificationPreferencesApi.mockResolvedValue({ data: { id: 'prefs' } });
    updateNotificationPreferencesApi.mockResolvedValue({ data: { id: 'prefs' } });
  });

  runCrudUsecaseTests(
    {
      list: listNotifications,
      get: getNotification,
      extraActions: [
        { fn: listNotificationTargets },
        { fn: getNotificationPreferences },
      ],
    },
    { queueRequestIfOffline }
  );

  it('marks notifications read/unread online', async () => {
    queueRequestIfOffline.mockResolvedValue(false);
    await expect(markNotificationRead('1')).resolves.toEqual({ id: '1', read: true });
    await expect(markNotificationUnread('1')).resolves.toEqual({ id: '1', read: false });
  });

  it('queues notification read/unread updates', async () => {
    queueRequestIfOffline.mockResolvedValue(true);
    await expect(markNotificationRead('1')).resolves.toEqual({ id: '1', read: true });
    await expect(markNotificationUnread('1')).resolves.toEqual({ id: '1', read: false });
  });

  it('updates notification preferences online', async () => {
    const payload = { channel: 'email' };
    queueRequestIfOffline.mockResolvedValue(false);
    await expect(updateNotificationPreferences(payload)).resolves.toEqual({ id: 'prefs' });
  });

  it('queues notification preferences updates', async () => {
    const payload = { channel: 'sms' };
    queueRequestIfOffline.mockResolvedValue(true);
    await expect(updateNotificationPreferences(payload)).resolves.toEqual(payload);
  });
});
