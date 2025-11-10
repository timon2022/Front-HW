import './App.css'
import Wrapper from './components/FlexBox'
import { Box } from './components/Box'
import Container from './components/Container'
import { Header } from './loyout/header/Header'
import { Skills } from './loyout/sections/skills/Skills'
import { Project } from './loyout/sections/projects/Projects'
import { Profile } from './loyout/sections/aboutme/Profile'
import { Footer } from './loyout/footer/Footer'
import Global from './style/GlobalStyle'
import { Main } from './loyout/sections/main/Main'

function App() {
    return (
        <>
            {/* <Global/> */}
            <Header />
            <Main/>
            <Skills/>
            <Project/>
            <Profile/>
            <Footer/>
        </>

    )
}

export default App


