import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Flex = (props: any) => {
    return (
        <StyledFlex {...props}/>
    )
};

export default Flex