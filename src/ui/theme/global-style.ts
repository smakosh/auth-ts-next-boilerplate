import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
	}
	
	:root {
		font-size: 16px;
	}

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    height: 100%;
  }

  body {
    margin: 0;
    background: #fff;
		color: #000;
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  h1, h2, h3, h4, h5, a, p, span {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    line-height: 1.2;
  }

  img {
    user-select: none;
  }

  button {
    cursor: pointer;

    &:hover {
      outline: none;
    }
  }

  a {
		text-decoration: none;
		color: #000;
		cursor: pointer;
  }

  h2 {
    font-size: calc(24px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
  }
  h3 {
    font-size: calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
  }
  h4 {
    font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
  }
  h5 {
    font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
  }
  input {
    border-radius: 0;
  }

  button, input {
    -webkit-appearance: none;
  }

  button:focus {
    outline: none;
  }
`;
