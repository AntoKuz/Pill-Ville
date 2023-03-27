import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: 'Gilroy-Medium';
  font-size: 16px;
  line-height: 1.2;
  padding: 14px 26px 10px;
  text-transform: uppercase;
  
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.02em;
  background: inherit;
  cursor: pointer;
  
  color: #FFFFFF;
  border: 3px solid #FFFFFF;
  border-radius: 500px;
  
  transition: 0.3s all;
  
  &:hover {
      background: #fff;
      color: #1E134A;
  }
`