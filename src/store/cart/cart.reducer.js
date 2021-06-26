import TYPES from '../types'

const INITIAL_STATE = {
  cart: [],
  quantity: 0,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      state.cart = action.data
      state.quantity = state.quantity + 1
      return state
    case TYPES.REMOVE_FROM_CART:
      state.cart = state.cart.filter(item => item.id !== action.data.id)
      state.quantity = state.quantity - action.data.quantity
      return state
    case TYPES.CLEAR_ALL_FROM_CART:
      state.cart = []
      state.quantity = 0
      return state
    default:
      return state
  }
}

export default reducer
