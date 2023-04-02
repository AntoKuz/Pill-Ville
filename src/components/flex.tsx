import React from 'react';
import styled from 'styled-components';

const SC_Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Flex = (props: any) => {
    return (
        <SC_Flex {...props}/>
    )
};

export default Flex