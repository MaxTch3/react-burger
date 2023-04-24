import { getCookie } from "./cookie-functions";

const NORMA_API = 'https://norma.nomoreparties.space/api';

const checkResponse = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
};

export type TUserAnswer = {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string
  };
}

export const registerUser = (email: string, password: string, name: string): Promise<TUserAnswer> => {
  return fetch(`${NORMA_API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password, name })
  })
    .then((res) => checkResponse(res))
};

export const loginUser = (email: string, password: string): Promise<TUserAnswer> => {
  return fetch(`${NORMA_API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
    .then((res) => checkResponse(res))
};

export const forgotPassword = (email: string)  => {
  return fetch(`${NORMA_API}/password-reset`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email })
  })
    .then((res) => checkResponse(res))
}

export const resetPassword = (password: string, token: string) => {
  return fetch(`${NORMA_API}/password-reset/reset`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ password, token })
  })
    .then((res) => checkResponse(res))
}

export function getUserRequest(): Promise<TUserAnswer> {
  return fetch(`${NORMA_API}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'authorization': `${getCookie('token')}`
    }
  })
    .then((res) => checkResponse(res))
};

export const updateUserRequest = (name: string, email: string, password: string): Promise<TUserAnswer> =>{
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

export const refreshTokenRequest = (): Promise<TUserAnswer> => {
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
