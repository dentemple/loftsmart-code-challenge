import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    /* box */
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;

    /* content */
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    font-size: 18px;
    font-family: ${props => props.theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body > #root {
    /* display */
    display: flex;
    flex-direction: column;
    align-items: center;

    /* box */
    height: 100vh;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.secondary};
  }
`

export default GlobalStyle
