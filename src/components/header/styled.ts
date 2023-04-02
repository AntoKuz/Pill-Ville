import styled from 'styled-components'

interface I_MarginBottomProps {
  margin: string | number
}

export const SC_Header = styled.header<I_MarginBottomProps>`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.margin};
  padding-top: 15px;
  background-image: url(@/images/pattern.svg);
`

 export const SC_Link = styled.a`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  padding-right: 80px;
  text-decoration: none;
  transition: 0.3s all;

  &:hover {
    text-decoration: underline;
  }
`

export const SC_HeaderIcon = styled.a`
  margin-right: 33px;
`