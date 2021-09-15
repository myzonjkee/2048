import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${props => props.theme.palette.background};
    font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .d-block {
    display: block;
  }
  .d-flex {
    display: flex;
  }
  .flex-1 {
    flex: 1
  }
  .flex-column {
    flex-direction: column;
  }
  .align-items-center {
    align-items: center;
  }
  .justify-content-center {
    justify-content: center;
  }

  .w-100 {
    width: 100%;
  }

  .mt-3 {
    margin-top: 1rem;
  }
  .mt-4 {
    margin-top: 1.5rem;
  }
  .mt-5 {
    margin-top: 3rem;
  }

  .mb-3 {
    margin-bottom: 1rem;
  }
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  .mb-5 {
    margin-bottom: 3rem;
  }

  .mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`