import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

test('markAsAread returns correct action', () => {
  expect(markAsAread(1)).toEqual({ type: MARK_AS_READ, index: 1 });
});

test('setNotificationFilter returns correct action', () => {
  expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT' });
});

