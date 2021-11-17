import styled,{css} from 'styled-components'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Intro from './components/Intro'
import { Navbar } from './components/Navbar'
import Price from './components/Price'
import Service from './components/Service'
import Contact from './components/Contact'

const Container = styled.div`
  height: 100vh;
  position:relative;
  
`
const Shape = css`
    width: 100%;
    position: absolute;
    top: 0;
    left:0;
    z-index:-1;  
    height:100%;
`

const IntroShape = styled.div`
    ${Shape}
    clip-path: polygon(60% 0,100% 0,100% 100%,50% 100%);
    background-color: crimson;
    
`

const FeatureShape = styled.div`
    ${Shape}
    clip-path:polygon(0% 0,50% 0,40% 100%,0% 100%);
    background-color: Pink;
    
`

const ServiceShape = styled.div`
    ${Shape}
    clip-path:polygon(0% 0,40% 0,40% 100%,0% 100%);
    background-color: #ff80c0;
    
`

const PriceShape = styled.div`
    ${Shape}
    clip-path:polygon(40% 0,100% 0,100% 100%,48% 100%);
    background-color: crimson;
    
`



function App() {
  const smallscreen = window.screen.width <= 480 ? true:false;
  return (
    <>
    <Container>
      <IntroShape></IntroShape>
      <Navbar/>
      <Intro></Intro>
    </Container>
    <Container>
      <Feature></Feature>
      <FeatureShape/>
    </Container>
    <Container>
      <Service></Service>
      { !smallscreen&&<ServiceShape/>}
    </Container>
    <Container>
      <Price></Price>
      <PriceShape></PriceShape>      
    </Container>
    <Container>
      <Contact></Contact>
      <Footer></Footer>
    </Container>

    </>
  );
}

export default App;
