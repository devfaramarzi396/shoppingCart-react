import { ADD_TO_CART, INCREMENT, DECREMENT } from "./action";

const initialState = {
    cart: []
}
const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            const hasProduct = !!(state.cart.find(p => p.id === action.payload.id))
            state.cart = hasProduct ?
                state.cart.map(p => p.id === action.payload.id ? { ...p, qty: p.qty + 1 } : p)
                :
                [...state.cart, { ...action.payload, qty: 1 }]

            console.log('add to cart', state.cart);
            return {
                ...state, cart: state.cart
            }
        case INCREMENT:

            state.cart = state.cart.map(p => p.id === action.payload ? { ...p, qty: p.qty += 1 } : p)
            console.log('inc', state.cart);

            return {
                ...state, cart: state.cart
            }
        case DECREMENT:
            const findProduct = state.cart.find(p => p.id === action.payload)
            if (findProduct.qty > 1) {
                state.cart = state.cart.map(p => p.id === action.payload ? { ...p, qty: p.qty -= 1 } : p)

            } else {
                state.cart = state.cart
            }
            console.log('dec', state.cart);
            return {
                ...state, cart: state.cart
            }

        default:
            return state
    }
}
export default cartReducer