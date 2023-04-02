import styled from 'styled-components';

const SC_FlexIntro = styled.div`
  display: flex;
`

export const FlexIntro = (props: any) => {
    return (
        <SC_FlexIntro {...props}/>
    )
}

