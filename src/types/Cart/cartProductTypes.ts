import {IProduct} from "../Product/productStateTypes";

export enum CartProductTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'ADD_REMOVE_PRODUCT_FROM_CART',
    INCREASE_PRODUCT = 'INCREASE_PRODUCT',
    DECREASE_PRODUCT = 'DECREASE_PRODUCT',
}

export interface AddToCart {
    type: CartProductTypes.ADD_TO_CART,
    payload: IProduct
}

export interface RemoveFromCart {
    type: CartProductTypes.REMOVE_FROM_CART,
    payload: number
}

export interface IncreaseProduct {
    type: CartProductTypes.INCREASE_PRODUCT,
    payload: number
}

export interface DecreaseProduct {
    type: CartProductTypes.DECREASE_PRODUCT,
    payload: number
}

export type CartAction =
    AddToCart
    | RemoveFromCart
    | IncreaseProduct
    | DecreaseProduct