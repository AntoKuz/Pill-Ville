import type { FC } from 'react'
import dynamic from 'next/dynamic'

import { AppWrapper, SC_GlobalAppStyles } from '@/app.styled'


const Header = dynamic(() => import('@/components/header'), { ssr: false })
const TimerNav = dynamic(() => import('@/components/timer-nav'), { ssr: false })
const TimerIntro = dynamic(() => import('@/components/timer-intro'), {ssr: false})

const Timer: FC = () => <>
  <AppWrapper>
    <SC_GlobalAppStyles />
    <Header />
    <TimerNav />
    <TimerIntro />
  </AppWrapper>
</>

export default Timer