import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = Map({
    filter: 'DEFAULT',
    notifications: Map({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    })
  });

  it('should return the filter type', () => {
    expect(filterTypeSelected(state)).toBe('DEFAULT');
  });

  it('should return the notifications', () => {
    expect(getNotifications(state).toJS()).toEqual(state.get('notifications').toJS());
  });

  it('should return the unread notifications', () => {
    expect(getUnreadNotifications(state).size).toBe(2);
  });
});

