import React from 'react'
import App from './app'
import styled, { createGlobalStyle } from 'styled-components'
import { GetStaticProps } from 'next'
// import GilroyBoldwoff from './../fonts/Gilroy-Bold.woff';
// import GilroyBoldwoff2 from './../fonts/Gilroy-Bold.woff2';

const Global = createGlobalStyle `
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
`

const Index = ({title}: {title:string}) => {
  return (
    <>
    <Global/> 
    <App/>
    <h1>{title}</h1>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  return{
    props: {
      title: ''
    }
  }
}

