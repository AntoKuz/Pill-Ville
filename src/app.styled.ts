import styled, { createGlobalStyle } from 'styled-components';

export const SC_GlobalAppStyles = createGlobalStyle`
  * { 
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  }

  body {
  font-family: sans-serif;
  height: 100vh;
  background: #1E134A;
  }

  li {
    list-style: none;
    text-decoration: none;
    color: #fff;
  }

  a{
    text-decoration: none;
    color: #fff;
  }
`

export const AppWrapper = styled.div`
  width: 100%;  
  min-height: 100vh;
`