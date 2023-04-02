import styled from "styled-components";

interface I_PageStyleProps {
    margin: string | number
}

export const SC_PageTitle = styled.h1<I_PageStyleProps>`
  font-size: 96px;
  line-height: 90px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffb800;
  margin-bottom: ${(props) => props.margin};

  span {
    font-size: 64px;
  }
`