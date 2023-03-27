import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0 184px;
`

 export const StyledLink = styled.a`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #FFFFFF;

    padding-right: 80px;
    text-decoration: none;

    transition: 0.3s all;

    &:hover {
        text-decoration: underline;
    }
`