import React from 'react'
import Container from '../container'
import Picture from "@/images/intro.png"
import FlexIntro from '../flex-intro'
import Text from '../text'
import { BlockTitle, StyledIntro } from './styled'
import { Title } from './styled'
import { MediumTitle } from './styled'
import MainButton from '../main-button'
import { StyledBlock, StyledBlocks, StyledBlockText, StyledBlockTitle } from '../blocks/styled'
// import { StyledImportantButton } from './styled'
// import Ribbon from './../../images/ribbon.png'


export const Intro = (props: any) => {
    return (
        <Container>
            <StyledIntro {...props}>
                <FlexIntro>
                    <div className="intro-left">
                        <Title>Wait! You turned me into an NFT?</Title>
                        <img className='intro__image' src={Picture.src} alt="intro image" />
                        <style jsx>
                            {`
                                .intro-left {
                                    max-width: 575px;
                                }

                                .intro__image {
                                    position: relative;
                                    bottom: 113px;
                                    left: -37px;
                                    width: 745px;
                                }
                            `}
                        </style>
                    </div>
                    <div className="intro-right">
                        <style jsx>
                            {`
                                   .intro-right {
                                       max-width: 576px
                                   }
                                `}
                        </style>
                        <MediumTitle>Our brand new <span>NF</span><span>Tv</span> show gives you the chance to be a part of the production. Purchasing your PillVille NFT will help fund the official pilot, give you unique access to the creative process and <span>three revenue</span> <span>streams</span> to earn from.</MediumTitle>
                        <Text>Brought to you by <span>Motionographer</span>, a seminal voice in Motion Design and founders of <span>The Motion Awards</span> and <span>F5 Festival</span>, Pillville NFTs are, first and foremost, what they’re meant to be, a work of art!</Text>
                        <Text>It just so happens that with this work of art, a whole bunch of cool stuff comes with it. Think of it like a digital event ticket or a VIP wristband you don’t need to wear. This digital ‘freedom pass’ kicks open doors that are usually locked as you get to roam behind the scenes of the show.</Text>
                        <Text>As a Pillville NFT holder, you have access to royalties (in perpetuity) and input into the show’s direction, so you can immerse yourself in a creative community that’s looking to involve its audience more than ever.</Text>
                        <Text>Welcome to a new breed of TV show!</Text>
                        <MainButton text={'become a member'} margin={0}/>
                    </div>
                </FlexIntro>
            </StyledIntro>
            <BlockTitle weight='bold'>PillVille NFTs get you access.</BlockTitle>
            <BlockTitle weight='normal'>Once you have access, you decide what you do with it.</BlockTitle>
            <StyledBlocks>
                <StyledBlock>
                    <StyledBlockText>
                        <StyledBlockTitle margin={ "33px" }  color = { "#CD3857" }>Royalties</StyledBlockTitle>
                        <p className='blog__subtitle'>It’s your show too</p>
                        <style jsx>
                            {`
                                .blog__subtitle {
                                    margin-bottom: 20px;
                                    font-size: 18px;
                                    color: #fff;
                                }

                                .blog__text {
                                    font-size: 16px;
                                    line-height: 131%;
                                    color: #B1A0F3;
                                }
                            `}
                        </style>
                        <p className='blog__text'>Owning a PillVille NFT makes you an investor in the show. Investors receive a royalty on all things PillVille, like every time the show is sold to a new streaming platform and on our official merchandising. As an NFT holder you will also recieve royalties from the secondary market sales. </p>
                    </StyledBlockText>
                </StyledBlock>
                <StyledBlock>
                    <StyledBlockText>
                        <StyledBlockTitle margin={ "15px" } color = { "#CD3857" }>Exclusive access</StyledBlockTitle>
                        <p className='blog__subtitle'>Be part of something bigger</p>
                        <style jsx>
                            {`
                                .blog__subtitle {
                                    margin-bottom: 20px;
                                    font-size: 18px;
                                    color: #fff;
                                }

                                .blog__text {
                                    font-size: 16px;
                                    line-height: 131%;
                                    color: #B1A0F3;
                                }
                            `}
                        </style>
                        <p className='blog__text'>We’ll be announcing a series of meet-ups, online and in-person, giving our community a chance to meet like-minded people with a passion for NFTs, animation, the metaverse and irreverent comedy. </p>
                    </StyledBlockText>
                </StyledBlock>
                <StyledBlock>
                <StyledBlockText>
                        <StyledBlockTitle margin={"15px"} color = { "#CD3857" }>Community Events</StyledBlockTitle>
                        <p className='blog__subtitle'>Be part of something bigger</p>
                        <style jsx>
                            {`
                                .blog__subtitle {
                                    margin-bottom: 20px;
                                    font-size: 18px;
                                    color: #fff;
                                }

                                .blog__text {
                                    font-size: 16px;
                                    line-height: 131%;
                                    color: #B1A0F3;
                                }
                            `}
                        </style>
                        <p className='blog__text'>We’ll be announcing a series of meet-ups, online and in-person, giving our community a chance to meet like-minded people with a passion for NFTs, animation, the metaverse and irreverent comedy.</p>
                    </StyledBlockText>
                </StyledBlock>
                <StyledBlock>
                    <StyledBlockText>
                        <StyledBlockTitle margin={ "33px" }   color = { "#CD3857" }>Giveaways</StyledBlockTitle>
                        <p className='blog__subtitle'>Be a part of the show</p>
                        <style jsx>
                            {`
                                .blog__subtitle {
                                    margin-bottom: 20px;
                                    font-size: 18px;
                                    color: #fff;
                                }

                                .blog__text {
                                    font-size: 16px;
                                    line-height: 131%;
                                    color: #B1A0F3;
                                }
                            `}
                        </style>
                        <p className='blog__text'>We’ll be giving one lucky winner from our sales their very own PillVille character. Send us your photo, and we’ll design it around you. You will receive an NFT of your character, and they may even get a cameo appearance in the show!</p>
                    </StyledBlockText>
                </StyledBlock>
            </StyledBlocks>
            <MainButton text={'become a member'} margin={"0 auto"}/>
        </Container>
    )
}


