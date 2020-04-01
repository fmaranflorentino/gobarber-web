import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    outline: 0;

    margin: 0;
    padding: 0;
  }

  *:focus {
    outline: 0;
  }

  html,
  body, 
  #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
