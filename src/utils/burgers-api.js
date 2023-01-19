const NORMA_API = 'https://norma.nomoreparties.space/api';

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
};

export function getIngredients() {
  return fetch(`${NORMA_API}/ingredients`)
   .then((res) => checkResponse(res))
};




