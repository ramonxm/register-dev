import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html, body, #root {
    font-family: 'Ubuntu', sans-serif;

    width: 100%;
    min-height: 100vh;

    background: ${({ theme }) => theme.palette.background.default};
  }

`;
