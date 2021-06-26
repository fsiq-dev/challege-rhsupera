/* eslint-disable jsx-quotes */
/* eslint-disable no-unreachable */
import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cart/cart.action'

const useStyles = makeStyles({
  title: {
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center',
    borderBottom: '1px solid #000',
  },
  pos: {
    marginBottom: 12,
  },
  images: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    marginTop: '20px',
  },
  ratingReviews: {
    color: '#3D3D3D',
    fontSize: '14px'
  },
  price: {
    position: 'relative',
    left: '185px',
    top: '-20px'
  }
})

const StyledCard = styled(Card)`
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
max-width: 300px;
margin: 20px;
`
const CustomButton = styled.div`
width: 100%;
height: 30px;
position: relative;
background-color: blue;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
font-size: 12px;
font-weight: 600;
position: relative;
top: -5px;
cursor: pointer;
`

export default function SimpleCard (props) {
  const { title, price, score, image } = props

  const classes = useStyles()
  const dispatch = useDispatch()

  const rating = () => {
    if (score >= 300) {
      return 5
    }
    if (score >= 200 && score <= 299) {
      return 4
    }
    if (score >= 100 && score <= 199) {
      return 3
    }
    if (score >= 51 && score <= 99) {
      return 2
    }
    if (score >= 1 && score <= 50) {
      return 1
    }
    return 0
  }

  const handleAddToCart = () => {
    const data = { title, price, score, image }
    dispatch(addToCart(data))
  }

  return (
    <StyledCard>
      <CardContent>
        <Typography className={classes.title} color='primary' gutterBottom>
          {title}
        </Typography>
        <div className={classes.images}>
          <img src={`/assets/image/${image}`} />
        </div>
        <div className={classes.rating}>
          <p>{title}</p>
          <Rating readOnly precision={0.5} value={rating()} />
          <p className={classes.ratingReviews}>({score}reviews)</p>
        </div>
        <div className={classes.priceContainer}>
          <p className={classes.price}>R${price}</p>
        </div>
      </CardContent>
      <CardActions>
        <CustomButton size='small' onClick={handleAddToCart}>ADD TO CART</CustomButton>
      </CardActions>
    </StyledCard>
  )
}
