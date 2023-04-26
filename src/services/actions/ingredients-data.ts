import { AppDispatch, AppThunk } from '../types';
import { getIngredients } from '../../utils/burgers-api';
import { TIngredient } from '../types/types';
export const GET_INGREDIENTS_DATA_REQUEST: 'GET_INGREDIENTS_DATA_REQUEST' = 'GET_INGREDIENTS_DATA_REQUEST';
export const GET_INGREDIENTS_DATA_SUCCESS: 'GET_INGREDIENTS_DATA_SUCCESS' = 'GET_INGREDIENTS_DATA_SUCCESS';
export const GET_INGREDIENTS_DATA_FAILED: 'GET_INGREDIENTS_DATA_FAILED' = 'GET_INGREDIENTS_DATA_FAILED';

export const getIngredientsData: AppThunk = () => (dispatch: AppDispatch) => {
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

export interface IGetIngredientsDataRequest {
  readonly type: typeof GET_INGREDIENTS_DATA_REQUEST
}

export interface IGetIngredientsDataSuccess {
  readonly type: typeof GET_INGREDIENTS_DATA_SUCCESS;
  data: TIngredient[]
}
export interface IGetIngredientsDataFailed {
  readonly type: typeof GET_INGREDIENTS_DATA_FAILED
}

export type TIngredientsDataActions =
  IGetIngredientsDataRequest
  | IGetIngredientsDataSuccess
  | IGetIngredientsDataFailed
