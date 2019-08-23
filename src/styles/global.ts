import { createGlobalStyle } from "styled-components";

// minimum reset styles and font setting
export default createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    padding: 0;
    margin: 0;
    background: rgb(246, 247, 248);
  }
`;
