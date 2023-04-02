import styled from 'styled-components'

interface I_MarginBlocksProps {
  margin: number | string
}

interface I_PaddingBlocksProps {
  padding: number | string
}

interface I_DescriptionsBlocksProps {
  fontSize: string | number;
  lineHeight: string | number;
}

export const SC_Blocks = styled.div<I_MarginBlocksProps>`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;

  margin: ${(props) => props.margin};
`

export const SC_Block = styled.div<I_PaddingBlocksProps>`
  padding: ${(props) => props.padding};
  min-height: 430px;
  width: 310px;
  background: ${(props) => props.color};
  border-radius: 42px;
`

export const SC_BlockText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const SC_BlockItemTitle = styled.h3<I_MarginBlocksProps>`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.03em;
  font-weight: 700;
  text-transform: uppercase;
  color: ${ (props) => props.color };
  margin-bottom: ${(props) => props.margin};
`

export const SC_BlockItemSubtitle = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  color: #fff;
`

export const SC_BlockItemDescription = styled.p<I_DescriptionsBlocksProps>`
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  width: 100%;
`