import { getIngredients } from '../../utils/burgers-api.js';
export const GET_INGREDIENTS_DATA_REQUEST = 'GET_INGREDIENTS_DATA_REQUEST';
export const GET_INGREDIENTS_DATA_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_DATA_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredientsData = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS_DATA_REQUEST
  });
  getIngredients()
    .then(res => {
      (res && res.success)
        ? dispatch({
          type: GET_INGREDIENTS_DATA_SUCCESS,
          data: res.data
        })
        : dispatch({
          type: GET_INGREDIENTS_DATA_FAILED
        })
    })
    .catch(() => {
      dispatch({
        type: GET_INGREDIENTS_DATA_FAILED
      })
    })
}

