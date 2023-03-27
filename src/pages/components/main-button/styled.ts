import styled from "styled-components"

type Props = {
    margin: string
}

export const StyledMainButton = styled.button<Props>`
    font-size: 20px;
    font-weight; 700;
    line-height: 1.15;
    
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    cursor: pointer;
    padding: 1.5em 2em;
    margin: ${(props) => props.margin};

    color: rgba(30, 19, 74, 1);

    background: #FFB800;
    border: 10px solid #1E134A;
    border-radius: 80px;
    filter: drop-shadow(0px 0px 15px #000000);
`
