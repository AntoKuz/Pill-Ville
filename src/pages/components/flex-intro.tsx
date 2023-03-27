import styled from 'styled-components';

const StyledFlexIntro = styled.div`
display: flex;
`

const FlexIntro = (props: any) => {
    return (
        <StyledFlexIntro {...props}/>
    )
}

export default FlexIntro