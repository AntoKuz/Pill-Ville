import styled from 'styled-components'

interface Props {
  fontWeight: number | string
}

export const SC_Intro = styled.section`
  margin-bottom: 70px;
  background: #1E134A;
`

export const SC_Title = styled.h1`
  font-size: 64px;
  line-height: 109%;
  max-width: 410px;
  letter-spacing: 0.03;
  text-transform: uppercase;
  color: white ;
`

 export const SC_MediumTitle = styled.h3`
  font-size: 28px;
  line-height: 129%; 
  letter-spacing: 0.03em;
  color: #fff;
  margin-bottom: 47px;

  span:nth-child(1) {
  color: rgba(255, 202, 0, 1);
  }

  span:nth-child(2) {
    color: rgba(205, 56, 87, 1);
    text-decoration: underline;
    padding: 4px;
    transition: .3s all;
    &:hover {
      width: 186px;
      height: 38px;
      background: #CD3857;
      border-radius: 42px;
      color: #fff;
    }
  }
`
export const SC_BlockTitle = styled.h2<Props>`
  font-size: 30px;
  font-weight: ${(props) => props.fontWeight};
  line-height: 35px;

  display: flex;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
`

export const SC_IntroImage = styled.img`
  position: relative;
  bottom: 113px;
  left: -37px;
  width: 745px;
`

export const SC_IntroInner = styled.div`
  max-width: 575px;
`
