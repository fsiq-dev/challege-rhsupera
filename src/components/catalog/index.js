/* eslint-disable react/jsx-indent */
/* eslint-disable unused-imports/no-unused-imports */
import React, { useEffect, useState } from 'react'

import data from '../../data/products.json'
import Card from '../card'

import ClearIcon from '@material-ui/icons/Clear'
import FilterListIcon from '@material-ui/icons/FilterList'
import {
  Main, Grid, Filter, FilterButton, DropdownMenu,
  DropdownMenuHeader, CloseIconS, PriceFilter, Label,
  TagFilterContainer, TagFilterLabel, TagFilterValue
} from './styled'

const defaultFilter = data.sort((itemA, itemB) => {
  return itemB.score - itemA.score
})

const Catalog = () => {
  const [filterOpen, setFilterOpen] = useState(false)
  const [currentFilter, setCurrentFilter] = useState(defaultFilter)
  const [filtered, setFiltered] = useState('')

  console.log('current', currentFilter)

  const handleOpenFilter = () => {
    setFilterOpen(!filterOpen)
  }

  const FilterByName = () => {
    const nameFilter = data.sort((itemA, itemB) => {
      if (itemA.name > itemB.name) {
        return 1
      }
      if (itemB.name > itemA.name) {
        return -1
      }
      return 0
    })
    setCurrentFilter(nameFilter)
    setFiltered('Name')
  }

  const FilterByRating = () => {
    const ratingFilter = data.sort((itemA, itemB) => {
      return itemB.score - itemA.score
    })
    setCurrentFilter(ratingFilter)
    setFiltered('Rating')
  }

  const FilterByPriceLow = () => {
    const priceFilterLow = data.sort((itemA, itemB) => {
      if (itemA.price > itemB.price) {
        return 1
      }
      if (itemB.price > itemA.price) {
        return -1
      }
      return 0
    })
    setCurrentFilter(priceFilterLow)
    setFiltered('Price Low')
  }

  const FilterByPriceHigh = () => {
    const priceFilterHigh = data.sort((itemA, itemB) => {
      if (itemA.price > itemB.price) {
        return -1
      }
      if (itemB.price > itemA.price) {
        return 1
      }
      return 0
    })
    setCurrentFilter(priceFilterHigh)
    setFiltered('Price High')
  }

  const ClearFilter = () => {
    const defaultFilter = data.sort((itemA, itemB) => {
      return itemB.score - itemA.score
    })
    setFiltered('')
    setCurrentFilter(defaultFilter)
  }

  return (
    <Main>
      <Filter>
        <FilterButton onClick={handleOpenFilter}>
          <FilterListIcon fontSize='small' />
          <span>Filter</span>
        </FilterButton>
        {filterOpen
          ? <DropdownMenu>
          <DropdownMenuHeader>
            <span>Filters</span>
            <CloseIconS onClick={handleOpenFilter} />
          </DropdownMenuHeader>
            <PriceFilter>
              <div>
                <input name='filter' id='price-low' type='radio' aria-label='Price Low' onChange={FilterByPriceLow} />
                <Label htmlFor='price-low'>Price Low</Label>
              </div>
              <div>
                <input name='filter' id='price-high' type='radio' aria-label='Price High' onChange={FilterByPriceHigh} />
                <Label htmlFor='price-high'>Price High</Label>
              </div>
              <div>
                <input name='filter' id='name' type='radio' aria-label='Name' onChange={FilterByName} />
                <Label htmlFor='name'>Name</Label>
              </div>
              <div>
                <input name='filter' id='rating' type='radio' aria-label='Rating' onChange={FilterByRating} />
                <Label htmlFor='rating'>Rating</Label>
              </div>
            </PriceFilter>
            </DropdownMenu>
          : ''}
          {filtered.length > 0
            ? <TagFilterContainer>
              <TagFilterLabel>
                <span>Filtred:</span>
              </TagFilterLabel>
              <TagFilterValue>
                {filtered}
                <ClearIcon fontSize='small' onClick={ClearFilter} />
              </TagFilterValue>
              </TagFilterContainer>
            : ''}
      </Filter>
      <Grid>
        {currentFilter.map((item, k) => {
          return <Card key={k} title={item.name} price={item.price} score={item.score} image={item.image} id={item.id} />
        })}
      </Grid>
    </Main>
  )
}

export default Catalog
