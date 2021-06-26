import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import ItemCart from './item'
import useOnClickOutside from '../../hooks/useOnClickOutside'

import cartSvg from '../../assets/cart-icon.svg'
import {
  CartContainer, CartSVG, CartSideBar, CartHeader, CloseIcon, EmptyCart,
  CheckoutContainer, CheckoutContent, Total, Delivery, Button, Item
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

  useEffect(() => {
    let qty = 0
    let totalPrice = 0
    let taxDefault = 0

    product?.forEach(item => {
      qty += item.quantity
      totalPrice += item.quantity * item.price
      if (totalPrice >= 250) {
        taxDefault = ' Frete Gratis'
      } else {
        taxDefault += item.quantity * 10
      }
    })
    setSubTotal(totalPrice.toFixed(2))
    setDeliveryCost(taxDefault)
  }, [subTotal, deliveryCost, product, setSubTotal, setDeliveryCost])

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
            <Total>
              <span className='total_label'>Sub Total:</span>
              <span>R${subTotal}</span>
            </Total>
            <Delivery>
              <span className='delivery_label'>Valor de Frete:</span>
              <span className='delivery_ammount'>R${deliveryCost}</span>
            </Delivery>
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
