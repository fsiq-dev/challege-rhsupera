import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'

import cartSvg from '../../assets/cart-icon.svg'
import Badge from '@material-ui/core/Badge'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -30,
    top: -18,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)

const CartContainer = styled.div`
margin-left: 20px;
`
const CartSVG = styled.img`
  height: 24px;
  width: 30px;
  object-fit: cover;
`
const Cart = () => {
  return (
    <>
      <CartContainer>
        <StyledBadge badgeContent={1} color='secondary' />
        <CartSVG src={cartSvg} />
      </CartContainer>
    </>
  )
}

export default Cart
