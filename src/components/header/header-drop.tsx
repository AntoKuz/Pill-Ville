import { FC } from 'react';

import Flex from '@/components/flex';
import Twitter from '@/images/twitter.svg'
import Logo from '@/images/logo.png'
import By from '@/images/by-motiongrapher.svg'
import Discord from '@/images/discord.svg'
import Ship from '@/images/ship.svg'

import { SC_Header, SC_HeaderIcon } from './styled';
import { HeaderDropLinks } from './header-links';
import { SC_Container } from '@/container/styled';

export const HeaderDrop: FC<any> = () => {
  return (
    <SC_Container>
      <SC_Header margin={'137px'}>
        <Flex>
          <a href=''>
            <img src={Logo.src} alt='logo' />
          </a>
          <a href=''>
            <img src={By.src} alt='By who' />
          </a>
        </Flex>
        <HeaderDropLinks />
        <Flex>

            <SC_HeaderIcon href=''>
              <img src={Ship.src} alt='Ship icon' />
            </SC_HeaderIcon>

            <SC_HeaderIcon href=''>
              <img src={Twitter.src} alt='twitter icon' />
            </SC_HeaderIcon>

            <SC_HeaderIcon href=''>
              <img src={Discord.src} alt='Discord icon' />
            </SC_HeaderIcon>
        </Flex>
      </SC_Header>
    </SC_Container>
  )
}; 