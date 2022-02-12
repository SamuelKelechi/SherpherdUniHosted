import React from 'react';
import styled from 'styled-components';
import Registrar from '../Images/Registrar.jpeg';
import Founder from '../Images/Founder.jpeg';
import Vice from '../Images/vice.jpeg';



function Admini() {
  return (
   <Container>
       <Wrapper>
         <Card>
            <Avatar src={Registrar}/>
            <Name>Dr. Adebola Akande</Name>
            <Office>Registrar</Office>
            <Obtained>Bsc, MBA, PH.D, FCIML</Obtained>
         </Card>

         <Card>
            <Avatar2 src={Founder} />
            <Name>Prof. Ganonlon Germain</Name>
            <Office>President/Founder of</Office>
            <Obtained>Great Shepherd University Partner Institution in Benin Republic <br/> (Esep Le Berger)</Obtained>
         </Card>

         <Card>
            <Avatar src={Vice} />
            <Name>Dr. Augustine Pekana N.</Name>
            <Office>Vice Chancellor</Office>
            <Obtained>LLB(Hons), MMP, MLCS & Ph.D</Obtained>
         </Card>
       </Wrapper>
   </Container>
  )
}

export default Admini

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
  margin-top: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 425px){
    width: 95%; 
  }
`

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`
const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: center;
  border: 1px solid grey;
`

const Avatar2 = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid grey;
`

const Name = styled.div`
  color: #00243A;
  font-size: 19px;
  font-weight: bold;
  margin-top: 8px;
`

const Office = styled.div`
  font-weight: bold;
`

const Obtained = styled.div`
  text-align: center;
`



