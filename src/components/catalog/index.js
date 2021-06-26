/* eslint-disable unused-imports/no-unused-imports */
import React from 'react'
import styled from 'styled-components'

import data from '../../data/products.json'
import Card from '../card'

const products = data.sort((itemA, itemB) => {
  return itemB.score - itemA.score
})

const Main = styled.main`
margin-left: auto;
margin-right: auto;
@media only screen and (max-width: 978px) {
  padding: 0;
}
`
const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows:   auto;
height: 100%;
width: 100%;
@media only screen and (max-width: 978px) {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
`

const Catalog = () => {
  return (
    <Main>
      <Grid>
        {products.map((item, k) => {
          return <Card key={k} title={item.name} price={item.price} score={item.score} image={item.image} />
        })}
      </Grid>
    </Main>
  )
}

export default Catalog
