import { getCookie } from "./cookie-functions";

const NORMA_API = 'https://norma.nomoreparties.space/api';

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
};

export function getIngredients() {
  return fetch(`${NORMA_API}/ingredients`)
    .then((res) => checkResponse(res))
};

export function postOrderData(orderData) {
  const accessToken = getCookie('token')
  return fetch(`${NORMA_API}/orders`, {
    method: 'POST',
    headers: {
      Authorization: accessToken,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      ingredients: orderData
    })
  })
    .then((res) => checkResponse(res))
}



