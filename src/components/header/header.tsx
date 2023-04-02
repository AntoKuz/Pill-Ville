import { FC } from 'react';

import Flex from '@/components/flex';
import Twitter from '@/images/twitter.svg'
import Logo from '@/images/logo.png'
import By from '@/images/by-motiongrapher.svg'
import Discord from '@/images/discord.svg'

import { SC_Header, SC_HeaderIcon } from './styled';
import { HeaderLinks } from './header-links';
import { SC_Container } from '@/container/styled';

export const Header: FC<any> = () => {
  return (
    <SC_Container>
      <SC_Header margin={'184px'}>
        <Flex>
          <a href=''>
            <img src={Logo.src} alt='logo' />
          </a>
          <a href=''>
            <img src={By.src} alt='By who' />
          </a>
        </Flex>
        <HeaderLinks />
        <Flex>
          <div>
            <SC_HeaderIcon href=''>
              <img src={Twitter.src} alt='twitter icon' />
            </SC_HeaderIcon>
            <a href=''>
              <img src={Discord.src} alt='Discord icon' />
            </a>
          </div>
        </Flex>
      </SC_Header>
    </SC_Container>
  )
}; 