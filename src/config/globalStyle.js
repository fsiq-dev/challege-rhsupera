import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: "Roboto", sans-serif;
    }

    #root {
        display:flex;
        flex-direction:column;
    }
`

export default GlobalStyle
