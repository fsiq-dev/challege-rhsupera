import TYPES from '../types'

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cartsItems = getState().cart.cart.slice()
    let alreadyExists = false
    cartsItems.forEach((item) => {
      if (item.id === product.id) {
        alreadyExists = true
        item.quantity++
      }
    })
    if (!alreadyExists) {
      cartsItems.push({ ...product, quantity: 1 })
    }
    dispatch({ type: TYPES.ADD_TO_CART, data: cartsItems })
  }
}

export const removeFromCart = (data) => {
  return (dispatch) => {
    dispatch({ type: TYPES.REMOVE_FROM_CART, data: data })
  }
}

export const clearALL = () => {
  return (dispatch) => {
    dispatch({ type: TYPES.REMOVE_FROM_CART })
  }
}
