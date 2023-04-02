import styled from "styled-components";

interface I_SuperProps {
  lineHeight: number | string
  margin: number | string
}

export const SC_SuperInner = styled.section`
padding: 123px 0 94px;
`

 export const SC_SuperTitle = styled.h1`
  font-size: 128px;
  line-height: 90px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.03;
  text-transform: uppercase;
  color: #ffb800;
  margin-bottom: 43px;
 `

 export const SC_SuperText = styled.p<I_SuperProps>`
  font-size: 32px;
  line-height: ${(props) => props.lineHeight};
  text-align: center;
  color: #fff;
  margin-bottom: ${(props) => props.margin};
`

export const SC_SuperImage = styled.img`
  width: 1440px;
  position: relative;
  right: 8%;
`