import styled from 'styled-components'

import ClearIcon from '@material-ui/icons/Clear'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export const Item = styled.div`
padding: 15px;
display: flex;
border: 1px solid rgba(0, 0, 0, 0.3);
margin-bottom: 10px;
`
export const Preview = styled.div`
width: 80px;
height: 80px;
`
export const Img = styled.img`
height: 100%;
object-fit: cover;
`
export const Content = styled.div`
display: flex;
flex-direction: column;
width: 100%;
& span {
  margin-bottom: 4px;
}
`
export const InputQuantity = styled.div`
width: 20px;
display: flex;
`
export const Input = styled.input`
width: 30px;
text-align: center;
`

export const StyledClearIcon = styled(ClearIcon)`
cursor: pointer;
`

export const StyledAddIcon = styled(AddIcon)`
cursor: pointer;
`

export const StyledRemoveIcon = styled(RemoveIcon)`
cursor: pointer;
`
