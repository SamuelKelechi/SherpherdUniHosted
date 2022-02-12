import React from 'react'
import styled from 'styled-components'
import {CgEditBlackPoint} from "react-icons/cg"

function Nb() {
  return (
    <Container>
    
    <Accom>
    NOTICE BOARD
    </Accom>
    <Point>
      <span><CgEditBlackPoint/>	Acceptance fee of the sum of ₦25,000 is part of the tuition but non refundable</span>
      <span><CgEditBlackPoint/>Hostel accommodation available for N50,000 (55,000CFA) Per semester</span>
    
    </Point>
    <AllNotice>
    Please make all your payments in naira.
Pay your tuition and charges into this authorized account in Nigeria:
Tellers should be well kept as it will be exchanged with school receipt

    <br/>
    Account Name: Ndienobi World Horizone Services
<br/>
Account Number: 0122690484(WEMA BANK PLC).<br/>


    </AllNotice>
  </Container>
  )
}

export default Nb


const AllNotice = styled.div`
width: 52%;

height: auto;
font-weight:600;
padding: 20px;
border: 1px solid lightgray;

border-radius:5px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
margin-top: 10px;
margin-bottom: 10px;
@media screen and (max-width:425px){
 width: 90%;
 font-size: 10px;
 padding: 0px;
}
`

const Point = styled.div`
display: flex;
flex-direction: column;
padding: 10px;

span{
  font-size: 25px;
}

@media screen and (max-width:425px){
 

  span{
    font-size: 15px;
  /* text-align: center; */
}
}
`

const Accom = styled.div`
font-weight: 700;
font-size: 30px;
margin-top: 10px;

@media screen and (max-width:425px){
  font-size:15px;
  text-align: center;
}
`

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin-top: 20px;
margin-bottom: 10px;




@media screen and (max-width:425px){

  width: 100%;
  height: auto;

  
}

`
const Wrapper = styled.div`
width: 83%;
height: 600px;


img{
  width: 100%;
height: 600px;
border-radius:5px

}

@media screen and (max-width:425px){
   
  width: 95%;
  overflow-x: scroll;
  height: 350px;

  img{
    width: 600px;
    height: 350px;
  }
  
}
`
