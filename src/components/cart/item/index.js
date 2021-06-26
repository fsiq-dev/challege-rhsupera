/* eslint-disable react/jsx-key */
import styled from 'styled-components'

import ClearIcon from '@material-ui/icons/Clear'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../store/cart/cart.action'

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
`
const Input = styled.input`
width: 30px;
text-align: center;
`

const ItemCart = ({ data }) => {
  console.log(data)
  const dispatch = useDispatch()

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item))
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
                <Input type='number' value={item.quantity} min='1' />
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
