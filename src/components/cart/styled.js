import styled from 'styled-components'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

export const CartContainer = styled.div`
margin-left: 20px;
`
export const CartSVG = styled.img`
  height: 24px;
  width: 30px;
  object-fit: cover;
`
// CART SIDE BAR
export const CartSideBar = styled.div`
  z-index: 1000;
  width: 400px;
  background: #ffffff;
  top: 0;
  right: 0;
  /* padding: 25px; */
  position: fixed;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  overflow: auto;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all ease-in-out 0.3s;
  &.expand {
    transition: all ease-in-out 0.3s;
    right: 0;
  }
  &.shrink {
    transition: all ease-in-out 0.3s;
    right: -400px;
  }
  @media only screen and (max-width: 978px) {
    width: 240px;
  }
`
export const EmptyCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`
export const CartHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #000;
background-color: #a40606;
background-image: linear-gradient(315deg, #a40606 0%, #d98324 74%);
color: #fff;
padding: 25px;
`
export const CloseIcon = styled(HighlightOffIcon)`
visibility: hidden;
@media only screen and (max-width: 978px) {
  visibility: initial;
  color: rgba(0, 0 , 0, 0.5);
  position: relative;
  left: 35px;
  top: -17px;
  &:active{
    color: red;
  }
}
`

// CHECKOUT
export const CheckoutContainer = styled.div`
height: 150px;
width: 100%;
background-color: rgba(13, 13, 13, 0.1);
`
export const CheckoutContent = styled.div`
padding: 20px;
`
export const Total = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
& span.total_label {
  color: #6A0599
}
`
export const Delivery = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
& span.delivery_label {
  color: #6A0599
}
& span.delivery_ammount {
  color: #BF1D00
}
`

export const Button = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #a40606;
  background-image: linear-gradient(315deg, #a40606 0%, #d98324 74%);
  color: #fff;
`
export const Item = styled.div`
height: 100%;
padding: 10px;
`
