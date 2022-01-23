import React from 'react'
import styled from 'styled-components'
import { FaChalkboardTeacher } from 'react-icons/fa';
import Aos from "aos"
import "aos/dist/aos.css"



function DCard(props) {
  return (
   <Container>
     <Wrapper data-aos={props.aos} data-aos-anchor-placement={props.aosda}  data-aos-duration="500">
       <Dcon>
         {/* <Dt></Dt> */}
         {props.icons}
       </Dcon>
       <Dcon2>
       {props.text}
       </Dcon2>
       
     </Wrapper>
   </Container>
  )
}

export default DCard

const Dt = styled(FaChalkboardTeacher)`
font-size: 75px;
color: #00243A;

`

const Dcon =styled.div`
width: 250px;
height: 100px;
display: flex;
justify-content:center;
align-items: center;
border-radius:10px 10px 0px 0px;
padding-top: 20px;
`
const Dcon2 =styled.div`
width: 250px;
height: 90px;

border-radius:0px 0px 10px 10px;
text-align: center;
color: lightslategrey;
font-size: 18px;
font-weight: 600;

:hover{
  color:#EF9F27;
}

`


const Container = styled.div`
margin: 10px;

`
const Wrapper = styled.div`
width: 250px;
height: 150px;
border-radius:10px;
display: flex;
flex-direction: column;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
background-color:white;
transform: scale(1);
transition: all 350ms;

&:hover{
  transform:scale(1.03);
  color: #EF9F27;
};

`

