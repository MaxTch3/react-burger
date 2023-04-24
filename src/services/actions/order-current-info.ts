export const GET_ORDER_CURRENT_INFO: 'GET_ORDER_CURRENT_INFO' = 'GET_ORDER_CURRENT_INFO';
export const REMOVE_ORDER_CURRENT_INFO: 'REMOVE_ORDER_CURRENT_INFO' = 'REMOVE_ORDER_CURRENT_INFO';

export type TOrderCurrentInfo = {
  _id: string;
  ingredients: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  name: string
}

export interface IGetOrderCurrentInfo {
  readonly type: typeof GET_ORDER_CURRENT_INFO;
  order: TOrderCurrentInfo
}

export interface IRemoveOrderCurrentInfo {
  readonly type: typeof REMOVE_ORDER_CURRENT_INFO
}

export type TOrderCurrentInfoActons = IGetOrderCurrentInfo | IRemoveOrderCurrentInfo;
