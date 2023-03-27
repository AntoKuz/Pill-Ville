import styled from 'styled-components'
// import Ribbon from '@/images/ribbon.png'

type Props = {
    weight: string;
}

export const StyledIntro = styled.div`
    padding-right: 64px;
    position: relative;

    background: url("");
`

export const Title = styled.h1`
    font-size: 64px;
    line-height: 109%;
    max-width: 410px;

    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: white ;
`

 export const MediumTitle = styled.h3`
    font-size: 28px;
    line-height: 129%; 

    letter-spacing: 0.03em;

    color: #fff;
    margin-bottom: 47px;

    span:nth-child(1) {
    color: rgba(255, 255, 255, 0.15);
    }

    span:nth-child(2) {
        color: rgba(255, 202, 0, 1);
    }

    span:nth-child(3) {
        width: 186px;
        height: 38px;
        background: #CD3857;
        border-radius: 42px;

        padding: 4px;
    }

    span:nth-child(4) {
        color: rgba(205, 56, 87, 1);
        text-decoration: underline;
    }
`
export const BlockTitle = styled.h2<Props>`
    font-size: 48px;
    font-weight: ${(props) => props.weight};
    line-height: 96%;

    display: flex;
    justify-content: center;
    text-align: center;

    color: #FFFFFF;
`