import { FC } from "react"

import { SC_Container } from "@/container/styled"
import { HeaderRoyalties } from "@/components/header/header-royalties"
import { SC_PageTitle } from "@/components/page-title/styled"
import { SC_PageSubtitle } from "@/components/page-subtitle/styled"
import Flex from "@/components/flex"
import royaltiesImage from "@/images/royalties.png"
import { SC_DropAdd, SC_Royalties } from "./styled"
import { SC_DropText } from "../drop/styled"
import MainButton from "@/components/main-button"
import { SC_Block, SC_BlockItemDescription, SC_BlockItemSubtitle, SC_BlockItemTitle, SC_Blocks, SC_BlockText } from "@/components/blocks/styled"

export const Royalties: FC<any> = () => (
    <SC_Royalties>
        <SC_Container>
            <HeaderRoyalties />
            <Flex>
                <SC_DropText margin={'23px'}>
                    <SC_PageTitle margin={'33px'}>ROYALTIES</SC_PageTitle>
                    <SC_PageSubtitle margin={'23px'}>
                        <p>Your NFT is a work of art that gives you access to an exclusive club. But it’s also a valuable asset that can achieve a significant return on your investment.</p> <br />
                        <p>You are becoming an partner in a project you believe in, and you will get a share of the rewards and dividends. Here’s how that works.</p>
                    </SC_PageSubtitle>
                    <SC_DropAdd>
                        *  Every investment involves risk and can result in profit or a total loss.
                        This is not financial advice.
                    </SC_DropAdd>
                    <MainButton shadow={'0 0 15px #000'}>BECOME A MEMBER</MainButton>
                </SC_DropText>
                <img src={royaltiesImage.src} alt="" />
            </Flex>

            <SC_Blocks margin={'95px 0 283px 0'}>
                <SC_Block padding={'59px 20px 0'} color={'#861e34'}>
                    <SC_BlockText>
                        <SC_BlockItemTitle margin={'66px'} color={'#ffb800'}>Syndication </SC_BlockItemTitle>
                        <SC_BlockItemDescription color={'#fff'} lineHeight={'29px'} fontSize={'18px'}>
                            NFT holders will get their
                            percentage of the royalties
                            based on how many times the
                            show is sold to, aired or played
                            on a streaming platform.
                        </SC_BlockItemDescription>
                    </SC_BlockText>
                </SC_Block>

                <SC_Block padding={'59px 20px 0'} color={'#861e34'}>
                    <SC_BlockText>
                        <SC_BlockItemTitle margin={'33px'} color={'#ffb800'}>ANCILLARY INCOME </SC_BlockItemTitle>
                        <SC_BlockItemDescription color={'#fff'} lineHeight={'29px'} fontSize={'18px'}>
                            NFT holders will receive royalties on the net profits from any official merchandise,
                            movie rights, game deals, and much more.
                            IP rights remain in the control of the creators,
                            but profits from their usage will be distributed amongst the NFT holders.
                        </SC_BlockItemDescription>
                    </SC_BlockText>
                </SC_Block>

                <SC_Block padding={'59px 20px 0'} color={'#861e34'}>
                    <SC_BlockText>
                        <SC_BlockItemTitle margin={'66px'} color={'#ffb800'}>NFT Value </SC_BlockItemTitle>
                        <SC_BlockItemDescription color={'#fff'} lineHeight={'29px'} fontSize={'18px'}>
                            As the show and the NFTs become even more popular,
                            we expect increased demand,
                            which can significantly raise the value of your token.
                        </SC_BlockItemDescription>
                    </SC_BlockText>
                </SC_Block>

                <SC_Block padding={'59px 20px 0'} color={'#861e34'}>
                    <SC_BlockText>
                        <SC_BlockItemTitle margin={'33px'} color={'#ffb800'}>Receiving payment </SC_BlockItemTitle>
                        <SC_BlockItemDescription color={'#fff'} lineHeight={'29px'} fontSize={'18px'}>
                            Using a smart contract on the decentralized public blockchain,
                            Ethereum, these royalties are  automatically 
                            distributed to the holders in cryptocurrency.
                        </SC_BlockItemDescription>
                    </SC_BlockText>
                </SC_Block>
            </SC_Blocks>
            f
        </SC_Container>
    </SC_Royalties>
)