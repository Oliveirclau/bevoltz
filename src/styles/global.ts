import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.white};
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
    }
  `}

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .container-content {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 0px 32px;
  }
`

export default GlobalStyles
