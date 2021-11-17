import React from 'react'
import styled from 'styled-components'
import Phone from '../img/phone.png'
import Map from '../img/map.png'
import Send from '../img/send.png'

const Container = styled.div`
    background:url('');
    height:90%;
    position: relative;
`

const Wrapper = styled.div`
    height:100%;
    padding:20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width:480px){
        flex-direction: column ;
        
    }

`

const FormContainer = styled.div`
    width:50%;
`

const AddressContainer = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width:480px){
        
        width:100%;
        
    }
`

const Form = styled.form`
    height: 250px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
        flex-direction: column;
        
    }

`
const Input = styled.input`
    width:200px;
    padding:20px;
    @media only screen and (max-width:480px){
        
        padding:5px;
        
    }
`


const TextArea = styled.textarea`
    width:200px;
    height: 150px;
    padding:20px;
    @media only screen and (max-width:480px){
        padding:5px;
       height:25px;
       margin-top:15px;
        
    }

`

const Button = styled.button`
    
    border:none;

    padding: 15px 20px;
    background-color: darkblue;
    color: #fff;
    font-size:20px;
    border-radius:10px;
    margin-top:20px;
    cursor:pointer;
    @media only screen and (max-width:480px){
        
        padding:5px 20px;
        margin-top:5px;
    }

`

const Title= styled.h1`
    margin: 50px;
    margin-top: 0;
    @media only screen and (max-width:480px){
        
        margin:5px;
        font-size:28px;
        
    }
`

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width:480px){
        
       margin:0;
        
    }
`
const RightForm = styled.div`
    
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const AddressItems= styled.div`
    display: flex;
    margin-bottom: 50px;
    width:100%;
    align-items: center;
    @media only screen and (max-width:480px){
        
        margin:10px;
        
    }
`

const Icon = styled.img`
    width:20px;
    margin-right: 20px;
` 

const Text = styled.span`
    font-size: 20px;    
    margin-right: 15px;
    @media only screen and (max-width:480px){
        
       font-size:15px;
        
    }
` 

function Contact() {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Question <br></br> Let's Get In Touch</Title>
                    <Form>

                    <LeftForm>
                        <Input placeholder="your name"/>
                        <Input placeholder="your email"/>
                        <Input placeholder="Subject"/>
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder="your message"/>
                        <Button>Send</Button>
                    </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItems>
                        <Icon src={Map}/>
                        <Text>123 park avenue street, New york USA</Text>
                    </AddressItems>
                    
                    <AddressItems>
                        <Icon src={Phone}/>
                        <Text>+91 9427344278</Text>
                        <Text>+91 7495344278</Text>
                    </AddressItems>
                    
                    <AddressItems>
                        <Icon src={Send}/>
                        <Text>Contact@jamesjohn.com</Text>
                        <Text>sales@james.dev</Text>
                    </AddressItems>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact
