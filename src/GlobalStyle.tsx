import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.palette.background}
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`