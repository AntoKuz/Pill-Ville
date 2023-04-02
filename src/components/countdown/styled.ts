import styled from "styled-components"

export const SC_CountdownInner = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`

export const SC_CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  :not(:last-child) {
    margin-right: 106px;
  }

  span:first-child {
    font-size: 140px;
    line-height: 153px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.03;
    text-transform: uppercase;
    color: #ffb800;
  }

  span:nth-child(2) {
    font-size: 20px;
    line-height: 23px;
    font-weight: 700;
    letter-spacing: 0.03;
    text-transform: uppercase;
    color: #fff;
  }
`
