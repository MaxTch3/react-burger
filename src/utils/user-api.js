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


export function forgetPassword(email) {
  return fetch(`${NORMA_API}/password-reset`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email })
  })
    .then((res) => checkResponse(res))
}

export function resetPassword(password, token) {
  return fetch(`${NORMA_API}/auth/password-reset/reset`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ password, token })
  })
    .then((res) => checkResponse(res))
}
