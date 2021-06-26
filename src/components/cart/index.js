import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import ItemCart from './item'
import useOnClickOutside from '../../hooks/useOnClickOutside'

import cartSvg from '../../assets/cart-icon.svg'
import {
  CartContainer, CartSVG, CartSideBar, CartHeader, CloseIcon, EmptyCart,
  CheckoutContainer, CheckoutContent, SubTotal, Total, Delivery, Button, Item
} from './styled'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -30,
    top: -18,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)

const Cart = (props) => {
  const $sideBarRef = useRef()
  useOnClickOutside($sideBarRef, () => setOpen(false))

  const quantityCart = useSelector(state => state.cart.quantity)
  const product = useSelector(state => state.cart.cart)

  const [isOpen, setOpen] = useState(false)
  const [subTotal, setSubTotal] = useState(0)
  const [deliveryCost, setDeliveryCost] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let qty = 0
    let subTotal = 0
    let deliveryCost = 0
    let total = 0

    product?.forEach(item => {
      qty += item.quantity
      subTotal += item.quantity * item.price
      if (subTotal >= 250) {
        deliveryCost = ' Frete Gratis'
        total = subTotal
      } else {
        deliveryCost += item.quantity * 10
        total = subTotal + deliveryCost
      }
    })

    setSubTotal(subTotal.toFixed(2))
    setDeliveryCost(deliveryCost)
    setTotal(total.toFixed(2))
  }, [subTotal, deliveryCost, product, total, setTotal, setSubTotal, setDeliveryCost])

  const handleOpenCartSideBar = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <CartContainer onClick={handleOpenCartSideBar}>
        <StyledBadge badgeContent={quantityCart} color='secondary' />
        <CartSVG src={cartSvg} />
      </CartContainer>
      <CartSideBar ref={$sideBarRef} className={isOpen ? 'expand' : 'shrink'}>
        <CartHeader>
          <h2>Your Cart</h2>
          <CloseIcon onClick={handleOpenCartSideBar} />
        </CartHeader>
        <Item>
          {product.length > 0 ? <ItemCart data={product} /> : <EmptyCart>Empty</EmptyCart>}
        </Item>
        <CheckoutContainer>
          <CheckoutContent>
            <SubTotal>
              <span className='subtotal_label'>Sub Total:</span>
              <span>R${subTotal}</span>
            </SubTotal>
            <Delivery>
              <span className='delivery_label'>Valor de Frete:</span>
              <span className='delivery_ammount'>R${deliveryCost}</span>
            </Delivery>
            <Total>
              <span className='total_label'>Total:</span>
              <span>R$ {total}</span>
            </Total>
            <Button onClick={() => alert('Obrigado!, voce finalizou sua compra')}>
              Finalizar
            </Button>
          </CheckoutContent>
        </CheckoutContainer>
      </CartSideBar>
    </>
  )
}

export default Cart
