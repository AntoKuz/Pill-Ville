import styled from 'styled-components'

interface I_MainButtonProps  {
  margin: number | string
  shadow: number | string
}

export const SC_MainButton = styled.button<I_MainButtonProps>`
  font-size: 20px;
  font-weight; 700;
  line-height: 1.15;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 30px 45px;
  margin: ${(props) => props.margin};
  color: rgba(30, 19, 74, 1);
  background: #FFB800;
  border: 10px solid #1E134A;
  border-radius: 80px;
  box-shadow: ${(props) => props.shadow};
  transition: .3s all;

  &:hover {
    background-color: #fff;
    color: #cd3857;
  }
`
