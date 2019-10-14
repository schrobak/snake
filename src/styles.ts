import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }

  html,
  body {
    background-color: #000;
    height: 100%;
  }

  body {
    background: #222;
    background: radial-gradient(#333, #111);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    font: 100%/1.5 sans-serif;
    overflow: hidden;
  }
`;
