import styled from "styled-components"

type Props = {
    margin: number
}

export const StyledBlocks = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 20px;

    margin: 45px 0;
`

export const StyledBlock = styled.div`
    padding: 50px 25px 0;
    height: 430px;
    width: 310px;

    background: #110833;
    border-radius: 42px;
`

export const StyledBlockText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const StyledBlockTitle = styled.h3< Props >`
    font-size: 30px;
    line-height: 116%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: ${ props => props.color };
    margin-bottom: ${(props) => props.margin};
`