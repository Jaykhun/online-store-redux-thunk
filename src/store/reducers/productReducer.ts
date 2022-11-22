import {FetchProductTypes, ProductFetchAction} from "../../types/Product/fetchProductTypes";
import {ProductState} from "../../types/Product/productStateTypes";

export const initialState: ProductState = {
    products: [],
    currentProduct: {},
    loading: false,
    error: null
}

export const productReducer = (state = initialState, action: ProductFetchAction): ProductState => {
    switch (action.type) {
        case FetchProductTypes.FETCH_PRODUCTS:
            return {...state, loading: true}

        case FetchProductTypes.FETCH_PRODUCTS_SUCCESS:
            return {...state, loading: false, products: action.payload}

        case FetchProductTypes.FETCH_CURRENT_PRODUCTS_SUCCESS:
            return {...state, loading: false, currentProduct: action.payload}

        case FetchProductTypes.FETCH_PRODUCTS_BY_CATEGORY:
            return {...state, loading: false, products: action.payload}

        case FetchProductTypes.FETCH_PRODUCTS_ERROR:
            return {...state, error: action.payload, loading: false}

        default:
            return state
    }
}