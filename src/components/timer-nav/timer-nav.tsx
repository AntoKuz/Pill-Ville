import { SC_Container } from '@/container/styled'
import type { FC } from 'react'
import { SC_TimerNav, SC_TimerNavItem, SC_TimerNavItems, SC_TimerNavTitle } from './styled'



export const TimerNav: FC = () => (
  <SC_Container>
    <SC_TimerNav>
      <SC_TimerNavTitle>Become a part of PillVille</SC_TimerNavTitle>
      <SC_TimerNavItems>

        <SC_TimerNavItem>
          <a href=''>Phase 0</a>
        </SC_TimerNavItem>

        <SC_TimerNavItem>
          <a href=''>Phase 1</a>
        </SC_TimerNavItem>

        <SC_TimerNavItem>
          <a href=''>Phase 2</a>
        </SC_TimerNavItem>

        <SC_TimerNavItem>
          <a href=''>Phase 3</a>
        </SC_TimerNavItem>

      </SC_TimerNavItems>
    </SC_TimerNav>
  </SC_Container>
)