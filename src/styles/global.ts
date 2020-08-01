import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  background: #f5f5f5;
  color: #333;

  font-size: 14px;
  font-family: sans-serif;
`;
