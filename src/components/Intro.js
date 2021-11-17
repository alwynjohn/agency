import React from 'react'
import styled from 'styled-components'
import girl from '../img/girl.png'
import Animatedshapes from './Animatedshapes'


const Container = styled.div`
    height:calc(100% - 50px);
    display:flex;
    padding:20px;
    @media only screen and (max-width:480px){
        flex-direction:column;
    }
`

const Left = styled.div`
  width: 60%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media only screen and (max-width:480px){
        width:100%;
        height:100%
    }
`
const Right = styled.div`
width: 40%;
@media only screen and (max-width:480px){
        display: none;
    }
`

const Info = styled.div`
    width:60%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:50px;
    
    @media only screen and (max-width:480px){
        flex-direction: column;
        width: 100%;
    }
`

const Button = styled.button`
    padding:10px 10px;
    background-color:darkblue;
    color:wheat;
    border-radius:10px;
    font-weight:bold;
    border:none;
    letter-spacing:2px;
    cursor:pointer;
    
    @media only screen and (max-width:480px){
        margin-bottom:50px;
        
    } 
`

const Title = styled.h1`
    width:60%;
    font-size:60px;

    @media only screen and (max-width:480px){
        width:100%;  
        font-size:50px;
        
    }
`
const Desc =  styled.p`
    width:60%;
    font-size:20px;
    margin-top:20px;
    
    @media only screen and (max-width:480px){
        width:100%;  
        
    }
`

const Contact = styled.div`
    display:flex;
    flex-direction:column;
`

const  Phone = styled.div`
    color:#f0667d;
    font-weight:bold;
` 

const ContactText = styled.div`
    color:grey;
    margin-top:5px;
    
    
`

const Image = styled.img`
    width: 100%;
`




function Intro() {
    return (
        <Container>
            <Left>
                <Title>Adventure in creative age</Title>
                <Desc>          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.</Desc>
          <Info>
                <Button>Start A Project </Button>
                <Contact>
                    <Phone>Call Us (012) 345 - 6789</Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
          </Info>
            </Left>
            <Right>
                <Image src={girl}/>
            </Right>
            <Animatedshapes/>
            
        </Container>
    )
}

export default Intro
