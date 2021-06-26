import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: #a40606;
  background-image: linear-gradient(315deg, #a40606 0%, #d98324 74%);
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
