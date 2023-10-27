export const ADD_TO_CART = "ADD_TO_CART"
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const CLEAR_FROM_CART = "CLEAR_FROM_CART"

export const setCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export const setIncrement = (productId) => {
    return {
        type: INCREMENT,
        payload: productId
    }
}
export const setDecrement = (productId) => {
    return {
        type: DECREMENT,
        payload: productId
    }
}
export const setClear=() => {
    return {
        type: CLEAR_FROM_CART
    }
}