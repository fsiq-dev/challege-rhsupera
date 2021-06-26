/* eslint-disable react/jsx-key */

import { useDispatch } from 'react-redux'
import { removeFromCart, decreaseToCart, incrementToCart } from '../../../store/cart/cart.action'
import { Item, Preview, Img, Content, InputQuantity, Input, StyledClearIcon, StyledAddIcon, StyledRemoveIcon } from './styled'

const ItemCart = ({ data }) => {
  const dispatch = useDispatch()

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item))
  }

  const handleIncrementToCart = (product) => {
    dispatch(incrementToCart(product))
  }

  const handleDecreaseToCart = (product) => {
    dispatch(decreaseToCart(product))
  }

  return (
    <>
      {data.map((item, k) => {
        return (
          <Item key={k}>
            <Preview>
              <Img src={`/assets/image/${item.image}`} />
            </Preview>
            <Content>
              <span>{item.title}</span>
              <span>R$ {item.price.toFixed(2)}</span>
              <InputQuantity>
                <StyledRemoveIcon fontSize='small' onClick={() => handleDecreaseToCart(item)} />
                <Input type='text' value={item.quantity} min='1' readOnly />
                <StyledAddIcon fontSize='small' onClick={() => handleIncrementToCart(item)} />
              </InputQuantity>
            </Content>
            <StyledClearIcon fontSize='small' onClick={() => handleRemoveItem(item)} />
          </Item>
        )
      })}
    </>
  )
}

export default ItemCart
