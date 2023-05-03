import { TOrderInfo } from "../types/types";

export const GET_ORDER_CURRENT_INFO: 'GET_ORDER_CURRENT_INFO' = 'GET_ORDER_CURRENT_INFO';
export const REMOVE_ORDER_CURRENT_INFO: 'REMOVE_ORDER_CURRENT_INFO' = 'REMOVE_ORDER_CURRENT_INFO';

export interface IGetOrderCurrentInfo {
  readonly type: typeof GET_ORDER_CURRENT_INFO;
  order: TOrderInfo
}

export interface IRemoveOrderCurrentInfo {
  readonly type: typeof REMOVE_ORDER_CURRENT_INFO
}

export type TOrderCurrentInfoActons =
  IGetOrderCurrentInfo
  | IRemoveOrderCurrentInfo;
