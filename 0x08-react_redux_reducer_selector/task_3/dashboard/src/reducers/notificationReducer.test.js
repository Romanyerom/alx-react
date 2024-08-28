import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the default state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual({
      notifications: [],
      filter: 'DEFAULT'
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' }
    ];
    const state = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    expect(state.notifications).toEqual(data.map(notification => ({ ...notification, isRead: false })));
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = {
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      ],
      filter: 'DEFAULT'
    };
    const state = notificationReducer(initialState, { type: MARK_AS_READ, index: 2 });
    expect(state.notifications[1].isRead).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const state = notificationReducer(undefined, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    expect(state.filter).toBe('URGENT');
  });
});

