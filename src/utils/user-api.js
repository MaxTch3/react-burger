import { getCookie } from "./cookie-functions";

const NORMA_API = 'https://norma.nomoreparties.space/api';

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
};

export function registerUser(email, password, name) {
  return fetch(`${NORMA_API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password, name })
  })
    .then((res) => checkResponse(res))
};

export function loginUser(email, password) {
  return fetch(`${NORMA_API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
    .then((res) => checkResponse(res))
};

export function forgotPassword(email) {
  return fetch(`${NORMA_API}/password-reset`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email })
  })
    .then((res) => checkResponse(res))
}

export function resetPassword(password, token) {
  return fetch(`${NORMA_API}/password-reset/reset`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ password, token })
  })
    .then((res) => checkResponse(res))
}

export function getUserRequest() {
  return fetch(`${NORMA_API}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'authorization': `${getCookie('token')}`
    }
  })
    .then((res) => checkResponse(res))
};

export function updateUserRequest(name, email, password) {
  return fetch(`${NORMA_API}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      'authorization': `${getCookie('token')}`
    },
    body: JSON.stringify({ name, email, password })
  })
    .then((res) => checkResponse(res))
}

export function refreshTokenRequest() {
  return fetch(`${NORMA_API}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ token: localStorage.getItem('jwt') })
  })
    .then((res) => checkResponse(res))
}

export function logoutUserRequest() {
  return fetch(`${NORMA_API}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ token: localStorage.getItem('jwt') })
  })
    .then((res) => checkResponse(res))
}
