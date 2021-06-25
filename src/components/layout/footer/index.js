import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  color: white;
`
const Footer = () => {
  return (
    <FooterContainer>
      <p>©Desafio-RhSupera by:Felipe Siqueira</p>
    </FooterContainer>
  )
}

export default Footer
