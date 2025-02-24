import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    color: currentColor;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

    &:focus,
    &:hover{
      outline:none;
    }

  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    font-family: ${({ theme }) => theme.font.fontFamily.main}, sans-serif
  }
`;

export default GlobalStyles;
