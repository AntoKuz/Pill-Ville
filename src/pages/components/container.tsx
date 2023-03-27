import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
max-width: 1280px;
width: 100%;
margin: 0 auto;
padding: 0 15px;
`

const Container = (props: any) => {
    return (
        <StyledContainer {...props}>
        </StyledContainer>
    )
};

export default Container