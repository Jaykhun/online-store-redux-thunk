import {
    FetchProductTypes,
    FetchProductsErrorAction,
    FetchProductsSuccessAction,
    FetchProductsAction, FetchCurrentProductAction, FetchProductByCategory
} from "../../types/Product/fetchProductTypes";
import {IProduct} from "../../types/Product/productStateTypes";

export const fetchProductsAction = (): FetchProductsAction => ({
    type: FetchProductTypes.FETCH_PRODUCTS
})

export const fetchProductsSuccessAction = (products: IProduct[]): FetchProductsSuccessAction => ({
    type: FetchProductTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const fetchCurrentProductSuccessAction = (product: IProduct): FetchCurrentProductAction => ({
    type: FetchProductTypes.FETCH_CURRENT_PRODUCTS_SUCCESS,
    payload: product
})

export const fetchProductByCategoryAction = (product: IProduct[]): FetchProductByCategory => ({
    type: FetchProductTypes.FETCH_PRODUCTS_BY_CATEGORY,
    payload: product
})

export const fetchProductsErrorAction = (error: string | null): FetchProductsErrorAction => ({
    type: FetchProductTypes.FETCH_PRODUCTS_ERROR,
    payload: error
})

