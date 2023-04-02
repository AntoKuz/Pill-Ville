import styled from 'styled-components'

import DropBg from '@/images/pattern.svg'


interface I_MarginBottomProps {
  margin: string | number
}

export const SC_Drop = styled.section`
  background: #cd3857;
  background-image: url(${DropBg.src});       //doesn't work
  padding-bottom: 88px;
`

export const SC_DropBg = styled.div`
  background-image: url(${DropBg});
`

export const SC_DropText = styled.div<I_MarginBottomProps>`
  max-width: 546px;
  margin-bottom: ${(props) => props.margin};
`