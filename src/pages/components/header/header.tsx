import React from 'react';
import Button from '../button';
import Container from '../container';
import Flex from '../flex';
import Twitter from '@/images/twitter.svg'
import Logo from '@/images/logo.png'
import By from '@/images/by-motiongrapher.svg'
import Discord from '@/images/discord.svg'
import { StyledHeader } from './styled';
import { StyledLink } from './styled'

export const Header = (props: any) => {
    return (
        <Container>
            <StyledHeader {...props}>
                <Flex>
                    <a className="" href="">
                        <img src={Logo.src} alt="logo" />
                    </a>
                    <a href="">
                        <img src={By.src} alt="By who" />
                    </a>
                </Flex>
                <Flex>
                    <StyledLink className='header__link' href="#">NFTv SHOW</StyledLink>
                    <Button>BECOME A MEMBER</Button>
                </Flex>
                <div className="div">
                    <a className="header__link" href="">
                        <img src={Twitter.src} alt="twitter icon"/>
                    </a>
                    <a href="">
                        <img src={Discord.src} alt="Discord icon"/>
                    </a>
                    <style jsx>
                            {`
                                .header__link {
                                   margin-right: 33px;
                                }
                            `}
                        </style>
                </div>
            </StyledHeader>
        </Container>
    )
}; 