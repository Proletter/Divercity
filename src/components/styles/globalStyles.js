import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
    height: 9000px;
   
}

@import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    box-sizing: borderbox;
    justify-content: center;
    align-items: center
  }
  h1 {
    font-family: Montserrat;
  }
`;

export default GlobalStyle