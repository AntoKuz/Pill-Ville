import Button from '@/components/button';
import Flex from '@/components/flex';
import { FC } from 'react';
import { SC_Link } from './styled';

export const HeaderLinks: FC<any> = () => {
  return (
    <Flex>
      <SC_Link href='#'>NFTv SHOW</SC_Link>
      <Button />
    </Flex>
  )
}

export const HeaderDropLinks: FC<any> = () => {
  return (
    <Flex>
      <SC_Link href='#'>ABOUT PILLVILLE</SC_Link>
      <SC_Link href='#'>HOW IT WORKS</SC_Link>
      <SC_Link href='#'>JOIN PILLVILLE</SC_Link>
    </Flex>
  )
}