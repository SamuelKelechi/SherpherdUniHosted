import React from 'react'
import styled from 'styled-components'
import {AiFillContainer} from "react-icons/ai"
import {GoVerified} from "react-icons/go"
import Aos from "aos"
import "aos/dist/aos.css"


function VerCon() {

  React.useEffect(()=>{
    Aos.init()
  },[])
  return (
    <Container>
      <Wrapper>
        <CardH data-aos="fade-up"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine">
        <br/>
            <br/>
            <br/>
            <br/>
          <Icon>
            <AiFillContainer style={{
              fontSize: "40px",
              color: "#00243A"
            }}/>
          </Icon>

          <Decs>
            <br/>
            <br/>
          
            <Title>ENQUIRIES IN NIGERIA</Title>
            <DD>Principal Enquiries and admission centre in Lagos and Ogun State
West Coast international Schools.
ADDRESS- 6, Surulere Street, Orilowo Ejigbo, Lagos, Nigeria.
PHONE NUMBERS- 08060209912, 07063879167</DD>
          </Decs>
        </CardH>
        <CardH data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
           <br/>
            <br/>
           <br/>
            <br/>
          <Icon>
          <GoVerified style={{
              fontSize: "40px",
              color: "#00243A"
            }}/>
          </Icon>

          <Decs>
          <br/>
          <br/>
          
            <Title>STATUS VERIFICATION</Title>
            <DD>Esep- Le Berger Université (French acronym) means the Shepherd University. Therefore, to look up the Shepherd University on the list of accredited Universities in Benin Republic in the Federal Ministry of Education & National Youth Service Corps (NYSC) office, use the French acronym Esep-Le Berger Benin.</DD>
          </Decs>
        </CardH>
    
      </Wrapper>
      
      </Container>
  )
}

export default VerCon

const Title = styled.div`
text-align: center;
margin-top: 5px;
font-weight: 700;
color:#00243A ;

`
const DD = styled.div`
text-align: center;
font-size: 15px;
font-weight: 400;

@media screen and (max-width:760px){
  font-size:13px;
}
`

const CardH = styled.div`
width: 340px;
height: 330px;

border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

/* transform: scale(1);
transition: all 350ms;




&:hover{
  transform:scale(1.03)
};
  */



@media screen and (max-width:760px){
  width: 290px;
 
}

`
const Icon = styled.div`
width: 80px;
height: 80px;
border-radius : 50%;
background-color: white;
display: flex;
justify-content:center;
align-items: center;
position: absolute;
top: 38px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const Decs = styled.div`
width: 100%;
height: 250px;
background-color: #F5F5F5;
border-radius :5px;
padding-left: 5px;
padding-right: 5px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

@media screen and (max-width:760px){
  width: 100%;
}
`

const Container = styled.div`
width: 100%;
// height: 370px;
background-color: #00243A;
margin-bottom: 50px;
display: flex;
justify-content:center;
align-items: center;
padding-bottom: 40px;
flex-wrap: wrap;

@media screen and (max-width:760px){
  height: auto;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
`
const Wrapper = styled.div`
width: 70%;
// height: 350px;
display: flex;
justify-content:space-around;
flex-wrap: wrap;



@media screen and (max-width:760px){
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
}



`
const Base = styled.div``