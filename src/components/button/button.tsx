import { FC } from 'react';
import Link from 'next/link';

import { SC_Button } from './styled'


export const Button:FC<any> = () => {
        return <Link href={'/timer'}><SC_Button>Become a member</SC_Button></Link>
};