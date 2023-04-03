import dynamic from 'next/dynamic';

import { SC_GlobalAppStyles, AppWrapper } from '@/app.styled'

const Header = dynamic(() => import('@/components/header'), { ssr: false })
const Intro = dynamic(() => import('@/sections/intro'), { ssr: false })
const Drop = dynamic(() => import('@/sections/drop'), { ssr: false })
const Super = dynamic(() => import('@/sections/super'), { ssr: false })
const Royalties = dynamic(() => import('@/sections/royalties'), { ssr: false })


const App = () => (
    <AppWrapper>
      <SC_GlobalAppStyles />
      <Header />
      <Intro />
      <Drop />
      <Super />
      <Royalties />
    </AppWrapper>
)

export default App