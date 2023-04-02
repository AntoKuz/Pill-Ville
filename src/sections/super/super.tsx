import { FC } from "react";

import { SC_Container } from "@/container/styled";
import { SC_SuperImage, SC_SuperInner, SC_SuperText, SC_SuperTitle } from "./styled";
import SuperImage from '@/images/super.png'
import MainButton from "@/components/main-button";


export const Super: FC<any> = () => (
    <SC_Container>
        <SC_SuperInner>
            <SC_SuperTitle>SUPER PILLS</SC_SuperTitle>
            <SC_SuperText margin={'138px'} lineHeight={'48px'}>
                Super Pills offer more access and a higher return on investment.<br />
                Owning a Bill The Pill NFT will give you exclusive early access to Super Pills.
            </SC_SuperText>
            <SC_SuperImage src={SuperImage.src}></SC_SuperImage>

            <SC_SuperText margin={'74px'} lineHeight={'50px '}>
                You are becoming an investor in a project you believe in, <br />
                and you should get a share of the rewards.
            </SC_SuperText>
            <MainButton margin={'0 auto'} shadow={'0 0 15px #000'}>BECOME A MEMBER</MainButton>
        </SC_SuperInner>
    </SC_Container>
)