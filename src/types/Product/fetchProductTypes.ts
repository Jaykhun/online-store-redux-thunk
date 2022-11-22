import {IProduct} from "./productStateTypes";

export enum FetchProductTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_CURRENT_PRODUCTS_SUCCESS = 'FETCH_CURRENT_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_BY_CATEGORY = 'FETCH_PRODUCTS_BY_CATEGORY',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
}

export interface FetchProductsAction {
    type: FetchProductTypes.FETCH_PRODUCTS
}

export interface FetchProductsSuccessAction {
    type: FetchProductTypes.FETCH_PRODUCTS_SUCCESS,
    payload: IProduct[]
}

export interface FetchCurrentProductAction {
    type: FetchProductTypes.FETCH_CURRENT_PRODUCTS_SUCCESS,
    payload: IProduct
}

export interface FetchProductByCategory {
    type: FetchProductTypes.FETCH_PRODUCTS_BY_CATEGORY,
    payload: IProduct[]
}

export interface FetchProductsErrorAction {
    type: FetchProductTypes.FETCH_PRODUCTS_ERROR,
    payload: string | null
}

export type ProductFetchAction =
    FetchProductsAction
    | FetchProductsSuccessAction
    | FetchProductByCategory
    | FetchCurrentProductAction
    | FetchProductsErrorAction
