import React from 'react'
import styled from 'styled-components'
import Alld from './ALLd'

function NewC() {
  return (
    <Container>
      <br/>
      <Wrapper>
        <Content1>Why Choose Us?</Content1>
        <Content2>
          <Alld/>
        </Content2>
        
   
      </Wrapper>
    </Container>
  )
}

export default NewC

const Container = styled.div`
height: auto;
`
const Wrapper = styled.div`
width:100%;
height: 250px;
position: relative;

@media screen and (max-width:1024px){
  height: 430px;
}

@media screen and (max-width:600px){
  height: 830px;
}
`

const Content1 = styled.div`
height: 130px;
width: 100%;
background-color:#F2F3F6;
font-weight: 600;
display: flex;
justify-content:center;
font-size: 35px;
padding-top: 20px;
color: #00243A;

@media screen and (max-width:600px){
 font-size:25px;
}

`
const Content2 = styled.div`
height: 200px;
width: 100%;
display: flex;
position: absolute;
top:70px;
justify-content:center;
align-items: center;

@media screen and (max-width:1024px){
  top: 160px;
}

@media screen and (max-width:600px){
  top: 350px;
}
/* background-color:red; */
`
