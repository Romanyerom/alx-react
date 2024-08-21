import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export function login(email, password) {
  return { type: LOGIN, user: { email, password } };
}

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

export function loginFailure() {
  return { type: LOGIN_FAILURE };
}

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('/login-success.json')
      .then(response => response.json())
      .then(data => dispatch(loginSuccess()))
      .catch(error => dispatch(loginFailure()));
  };
}

