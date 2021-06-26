import styled from 'styled-components'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar'
import Cart from '../../cart'

const SHeader = styled.header`
  display: flex;
  border-bottom: 1px solid rgba(13, 0, 13, 0.2);
`
const HeaderContainer = styled.div`
  padding: 0 20px 0 30px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  max-width: 1366px !important;
  margin: auto;
  padding: 0 30px;
  height: 80px;
  max-height: 100px;
  
`
const Logo = styled.img`
  width: 100px;
  height: 100px;
`

// CATEGORIA
const Category = styled.div`
display: flex;
justify-content: center;
align-items: center;
p {
  margin-left: 10px;
  font-size: 1.125rem;
  color: #717171;
}
@media only screen and (max-width: 960px) {
  display: none;
}
`

// SEARCH
const SearchInput = styled.div`
  width: 500px;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`
const Form = styled.form`
  height: 40px;
  position: relative;
`
const StyledSearchIcon = styled(SearchIcon)`
height: 100%;
position: absolute;
left: 475px;
@media only screen and (max-width: 978px) {
  left: 125px;
}
`
const SearchInputField = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 5px 0 12px;
  border-radius: 8px;
  margin-right: 0;
  width: 100%;
`
const Input = styled.input`
    display: flex;
    height: 48px;
    padding-left: 30px;
    padding-right: 0px;
    line-height: 1.25em;
    font-weight: 300;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 100%;
    @media only screen and (max-width: 960px) {
      padding-left: 12px;
      padding-right: 10px;
  }
`
//

// Menu
const MenuContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 20px;
max-width: 500px;
`
const User = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 20px;
position: relative;
@media only screen and (max-width: 960px) {
  display: none;
  margin-left: 0;
}
`

const SPermIdentityIcon = styled(PermIdentityIcon)`
height: 24px;
width: 24px;
`

const Header = () => {
  return (
    <>
      <SHeader>
        <HeaderContainer>
          <Logo src='/assets/image/logo-removebg-preview.png' />
          <SearchInput>
            <Form>
              <SearchInputField>
                <StyledSearchIcon />
                <Input
                  type='text'
                  name='search'
                  id='search'
                  autoComplete='false'
                  placeholder='Busque por item'
                />
              </SearchInputField>
            </Form>
          </SearchInput>
          <MenuContainer>
            <Category> {/* Mock para um possivel troca de categoria de produtos */}
              <Avatar src='/assets/image/game-ratings-featured.jpg' />
              <p>Games</p>
              <ArrowDropDownIcon />
            </Category>
            <User>
              <SPermIdentityIcon />
              <span>usuario</span>
            </User>
            <Cart />
          </MenuContainer>
        </HeaderContainer>
      </SHeader>
    </>
  )
}

export default Header
