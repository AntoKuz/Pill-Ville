import styled from "styled-components";

interface I_MarginBottomProps {
    margin: string | number
  }

export const SC_PageSubtitle = styled.p<I_MarginBottomProps>`
  font-size: 24px;
  line-height: 30px;
  color: #fff;
  margin-bottom: ${(props) => props.margin}
`