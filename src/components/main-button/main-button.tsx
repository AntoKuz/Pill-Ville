import Link from 'next/link'

import { SC_MainButton } from './styled'


export const MainButton = (props: any) =>(
  <Link href={'/timer'}><SC_MainButton {...props}/></Link>
)
