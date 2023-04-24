import { TIngredient } from "./component-types";
import { getCookie } from "./cookie-functions";

const NORMA_API = 'https://norma.nomoreparties.space/api';

export type TIngredientsData = {
  success: boolean;
  data: TIngredient[];
};

export type TOrderAnswer = {
  order: { number: number };
};

const checkResponse = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
};

export const getIngredients = (): Promise<TIngredientsData> => {
  return fetch(`${NORMA_API}/ingredients`)
    .then((res) => checkResponse(res))
};

export const postOrderData = (orderData: string[]): Promise<TOrderAnswer> => {
  const accessToken = `${getCookie("token")}`
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



