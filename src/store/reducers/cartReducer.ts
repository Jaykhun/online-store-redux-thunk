import {CartState} from "../../types/Cart/cartStateTypes";
import {CartAction, CartProductTypes} from "../../types/Cart/cartProductTypes";

const initialState: CartState = []

export const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case CartProductTypes.ADD_TO_CART:
            return state.concat([action.payload])

        case CartProductTypes.REMOVE_FROM_CART:
            return state.filter(product => product.id !== action.payload)

        case CartProductTypes.INCREASE_PRODUCT:
            return state.map(product => (
                (product.id === action.payload)
                    ? {...product, count: product.count + 1}
                    : product
            ))

        case CartProductTypes.DECREASE_PRODUCT:
            return state.map(product =>
                (product.id === action.payload)
                    ? {...product, count: product.count - 1}
                    : product
            )

        default:
            return state
    }
}