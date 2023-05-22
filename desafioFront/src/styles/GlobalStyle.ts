import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-primary-900: #000a12;
    --color-primary-800: #001428;
    --color-primary-700: #001933;
    --color-primary-600: #001e3e;
    --color-primary-500: #00244a;
    --color-primary-400: #00315c;
    --color-primary-300: #00446e;
    --color-primary-200: #005a85;
    --color-primary-100: #0070a0;
    --color-gray-900: #0f0f0f;
    --color-gray-800: #262626;
    --color-gray-700: #3e3e3e;
    --color-gray-600: #555555;
    --color-gray-500: #737373;
    --color-gray-400: #969696;
    --color-gray-300: #b8b8b8;
    --color-gray-200: #d9d9d9;
    --color-gray-100: #ededed;

    font-size: 60%;   
  }
  
  /* font-size: 16px;
  1rem = 10px
  */

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
