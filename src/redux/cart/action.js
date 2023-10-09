export const ADD_TO_CART = "ADD_TO_CART"
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

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