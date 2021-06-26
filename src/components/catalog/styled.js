import styled from 'styled-components'

import CloseIcon from '@material-ui/icons/Close'

export const Main = styled.main`
margin-left: auto;
margin-right: auto;
@media only screen and (max-width: 978px) {
  padding: 0;
}
`
export const Grid = styled.div`
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

export const Filter = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row-reverse;
align-items: center;
position: relative;
padding: 10px;
`
export const FilterButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const DropdownMenu = styled.div`
/* display: none; */
position: absolute;
top: 14px;
background-color: #f9f9f9;
min-width: 158px;
z-index: 1;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
export const DropdownMenuHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
border-bottom: 1px solid rgba(13, 0 , 13, 0.1);
`
export const CloseIconS = styled(CloseIcon)`
color: rgba(13, 0 , 13, 0.3);
`

export const PriceFilter = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
& div { margin-bottom: 5px; }
`
export const Label = styled.label`
margin-left: 10px;
`

export const TagFilterContainer = styled.div`
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
display: flex;
justify-content: center;
align-items: center;
`
export const TagFilterLabel = styled.div`
padding: 5px;
height: 100%;
border-right: 1px solid rgba(0, 0, 0, 0.2);
font-size: 16px;
font-weight: 600;
color: rgb(153, 164, 174);
background-color: rgb(244, 246, 248);
`
export const TagFilterValue = styled.div`
display: flex;
align-items: center;
border-radius: 10px;
margin-left: 10px;
margin-right: 10px;
background-color: (244, 246, 248);
`
