import { bindActionCreators } from 'redux';
import {
  LOGIN, LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

export function login(email, password) {
  return { type: LOGIN, user: { email, password } };
}

export function logout() {
  return { type: LOGOUT };
}

export function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

export function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

export function boundLogin(email, password) {
  return (dispatch) => bindActionCreators(login, dispatch)(email, password);
}

export function boundLogout() {
  return (dispatch) => bindActionCreators(logout, dispatch)();
}

export function boundDisplayNotificationDrawer() {
  return (dispatch) => bindActionCreators(displayNotificationDrawer, dispatch)();
}

export function boundHideNotificationDrawer() {
  return (dispatch) => bindActionCreators(hideNotificationDrawer, dispatch)();
}

