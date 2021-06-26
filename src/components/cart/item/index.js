/* eslint-disable react/jsx-key */
import styled from 'styled-components'

import ClearIcon from '@material-ui/icons/Clear'
import { useDispatch } from 'react-redux'
import { removeFromCart, decreaseToCart, incrementToCart } from '../../../store/cart/cart.action'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const Item = styled.div`
padding: 15px;
display: flex;
border: 1px solid rgba(0, 0, 0, 0.3);
margin-bottom: 10px;
`
const Preview = styled.div`
width: 80px;
height: 80px;
`
const Img = styled.img`
height: 100%;
object-fit: cover;
`
const Content = styled.div`
display: flex;
flex-direction: column;
width: 100%;
& span {
  margin-bottom: 4px;
}
`
const InputQuantity = styled.div`
width: 20px;
display: flex;
`
const Input = styled.input`
width: 30px;
text-align: center;
`

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
                <RemoveIcon fontSize='small' onClick={() => handleDecreaseToCart(item)} />
                <Input type='text' value={item.quantity} min='1' readOnly />
                <AddIcon fontSize='small' onClick={() => handleIncrementToCart(item)} />
              </InputQuantity>
            </Content>
            <ClearIcon fontSize='small' onClick={() => handleRemoveItem(item)} />
          </Item>
        )
      })}
    </>
  )
}

export default ItemCart
