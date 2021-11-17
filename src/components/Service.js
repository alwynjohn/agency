import React,{useState} from 'react'
import styled from 'styled-components'
import tablet from '../img/tablet.png'
import Minicard from './Minicard'
import Play from '../img/play.png'


const Container = styled.div`
    display: flex;
    position:relative;
    height:100%;
    
    @media only screen and (max-width:480px){
       flex-direction:column;
        
    }
`


const Left = styled.div`
    width: 50%;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width:480px){
        display:none ;
        
    }
`



const Right = styled.div`
    width: 50%;
    
    @media only screen and (max-width:480px){
        width:100%;  
        
    }
`
const Image = styled.img`
    display : ${props=> props.open && "none"};
    margin-left: 50px;
`

const Video = styled.video`
    display : ${props=> !props.open && "none"};
    height:300px;
    margin:auto;
    top:0;
    bottom:0;
    position:absolute;
    
    @media only screen and (max-width:480px){
        padding:20px;  
        width:100%;
        
    }

`

const Wrapper = styled.div`
    padding:50px;
    display:flex;
    flex-direction:column;
    
    @media only screen and (max-width:480px){
        padding:20px;  
        width:100%;
        
    }
`

const Title = styled.h1`

`

const Desc = styled.p`
    font-size:20px;
    margin-top: 20px;
    color:#555;
`
const Cardcontainer = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:50px;
`

const Button = styled.button`
    width:180px;
    border:none;
    border-radius:10px;
    background-color: darkblue;
    color:#fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding:15px 10px;
    margin-top: 50px;
    cursor:pointer;
`

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`

const Modal = styled.div`
    width: 100vw;
    height:100vh;
    position: absolute;
    top: 0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
const CloseButton = styled.button`
    position:absolute;
    background-color: #fff;
    padding:5px;
    border:none;
    right:0;
    top:30%;
    border-radius:5px ;
`


function Service() {
    
    const [open, setOpen] = useState("true")
    console.log(open);
    const smallscreen = window.screen.width <= 480 ? true:false;
    return (
        <Container>
               <Left>
                   <Image open={open} src={tablet}/>
                   <Video autoPlay mute loop controls open={open} src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"></Video>
               </Left>
               <Right>
                    <Wrapper>
                        <Title>Simple process to start</Title>
                        <Desc> We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources</Desc>
                        <Cardcontainer>
                            <Minicard/>
                            <Minicard/>
                            <Minicard/>
                        </Cardcontainer>
                        <Button onClick={()=> setOpen(true)}><Icon src={Play}></Icon>How It works</Button>
                    </Wrapper>
                </Right> 

            {smallscreen && open &&(
                <Modal>
                    <Video autoPlay mute loop controls open={open} src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"/>
                    <CloseButton onClick={()=> setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    )
}

export default Service
