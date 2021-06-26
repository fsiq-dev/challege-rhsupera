import TYPES from '../types'

export const addToCart = (data) => {
  console.log(data)
  return (dispatch) => {
    dispatch({ type: TYPES.ADD_TO_CART, data })
  }
}
