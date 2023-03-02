const NORMA_API = 'https://norma.nomoreparties.space/api';

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
};

export function forgetPassword(email) {
  return fetch(`${NORMA_API}/password-reset`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email })
  })
    .then((res) => checkResponse(res))
}


export function resetPassword( password, token) {
  return fetch(`${NORMA_API}auth/password-reset/reset`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ password, token })
  })
    .then((res) => checkResponse(res))
}


export function registerUser(name, email, password) {
  return fetch(`${NORMA_API}auth/register`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  })
    .then((res) => checkResponse(res))
}
