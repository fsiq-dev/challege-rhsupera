import TYPES from '../types'

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cart.slice()
    let alreadyExists = false
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        alreadyExists = true
        item.quantity++
      }
    })
    if (!alreadyExists) {
      cartItems.push({ ...product, quantity: 1 })
    }
    dispatch({ type: TYPES.ADD_TO_CART, data: cartItems })
  }
}

export const removeFromCart = (data) => {
  return (dispatch) => {
    dispatch({ type: TYPES.REMOVE_FROM_CART, data: data })
  }
}

export const incrementToCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cart.slice()
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        if (item.quantity >= 1) {
          item.quantity += 1
        }
      }
    })
    dispatch({ type: TYPES.INCREMENT_TO_CART, data: cartItems })
  }
}

export const decreaseToCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cart.slice()
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        if (item.quantity >= 1) {
          item.quantity -= 1
        }
      }
    })
    dispatch({ type: TYPES.DECREASE_TO_CART, data: cartItems })
  }
}

export const clearALL = () => {
  return (dispatch) => {
    dispatch({ type: TYPES.REMOVE_FROM_CART })
  }
}
