export const addTransfer = payload => ({
  type: 'ADD_TRANSFER',
  payload,
});

export const substractFromBalance = payload => ({
  type: 'SUBSTRACT_FROM_BALANCE',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});