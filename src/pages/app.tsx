import dynamic from 'next/dynamic';
import styled from 'styled-components';
const Header = dynamic(() => import ('./components/header'), {ssr: false})
const Intro = dynamic(() => import ('./components/intro'), {ssr: false})

 export const AppWrapper = styled.div`
    width: 100%;    
    min-height: 100vh;
    padding: 2rem;
`

const App = () => {
    return (
        <>
            <AppWrapper>
             <Header/>
             <Intro/>
            </AppWrapper>
        </>
    )
}

export default App