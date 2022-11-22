import {
    AddToCart,
    CartProductTypes, DecreaseProduct,
    IncreaseProduct,
    RemoveFromCart
} from "../../types/Cart/cartProductTypes";
import {IProduct} from "../../types/Product/productStateTypes";

export const removeFromCart = (id: number): RemoveFromCart => ({
    type: CartProductTypes.REMOVE_FROM_CART,
    payload: id
})

export const addToCart = (payload: IProduct): AddToCart => ({
    type: CartProductTypes.ADD_TO_CART,
    payload: payload
})

export const increaseProduct = (id: number): IncreaseProduct => ({
    type: CartProductTypes.INCREASE_PRODUCT,
    payload: id
})

export const decreaseProduct = (id: number): DecreaseProduct => ({
    type: CartProductTypes.DECREASE_PRODUCT,
    payload: id
})