import axios from "axios";
import {Dispatch} from "redux";
import {IProduct} from "../../types/Product/productStateTypes";
import {ProductFetchAction} from "../../types/Product/fetchProductTypes";
import {
    fetchProductsAction,
    fetchProductsSuccessAction,
    fetchCurrentProductSuccessAction,
    fetchProductByCategoryAction,
    fetchProductsErrorAction,
} from "../actions/productActions";

export const fetchProducts = (limit = 5) => {
    return async (dispatch: Dispatch<ProductFetchAction>) => {
        try {
            dispatch(fetchProductsAction())
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products', {
                params: {limit: limit}
            })
            dispatch(fetchProductsSuccessAction(response.data))
        } catch (e: any) {
            dispatch(fetchProductsErrorAction(e.message))
        }
    }
}

export const fetchCurrentProduct = (id?: string) => {
    return async (dispatch: Dispatch<ProductFetchAction>) => {
        try {
            dispatch(fetchProductsAction())
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            dispatch(fetchCurrentProductSuccessAction(response.data))
        } catch (e: any) {
            dispatch(fetchProductsErrorAction(e.message))
        }
    }
}

export const fetchProductByCategory = (categoryName: string) => {
    return async (dispatch: Dispatch<ProductFetchAction>) => {
        try {
            dispatch(fetchProductsAction())
            const response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products/category/${categoryName}`)
            dispatch(fetchProductByCategoryAction(response.data))
        } catch (e: any) {
            dispatch(fetchProductsErrorAction(e.message))
        }
    }
}