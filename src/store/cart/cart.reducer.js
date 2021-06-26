import TYPES from '../types'

const INITIAL_STATE = {
  cart: [],
  quantity: 0,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      state.cart = [...state.cart, action.data]
      state.quantity = state.quantity + 1
      return state
    default:
      return state
  }
}

export default reducer
