import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

test('login returns correct action', () => {
  expect(login('test@test.com', '1234')).toEqual({ type: LOGIN, user: { email: 'test@test.com', password: '1234' } });
});

test('logout returns correct action', () => {
  expect(logout()).toEqual({ type: LOGOUT });
});

