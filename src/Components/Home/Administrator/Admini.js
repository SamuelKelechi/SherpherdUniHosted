import React from 'react'
import styled from 'styled-components'

function Admini() {
  return (
   <Container>
       <Wrapper>
         <Card>
            <Avatar></Avatar>
            <Name>Name</Name>
            <Office>Office</Office>
            <Obtained>Qualifications</Obtained>
         </Card>

         <Card>
            <Avatar></Avatar>
            <Name>Name</Name>
            <Office>Office</Office>
            <Obtained>Qualifications</Obtained>
         </Card>

         <Card>
            <Avatar></Avatar>
            <Name>Name</Name>
            <Office>Office</Office>
            <Obtained>Qualifications</Obtained>
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
const Avatar = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid grey;
`

const Name = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin-top: 8px;
`

const Office = styled.div`
  font-weight: bold;
`

const Obtained = styled.div``



