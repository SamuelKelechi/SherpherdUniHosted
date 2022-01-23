import React from 'react'
import styled from 'styled-components'
import Learn from "../MyOwn/First/Learn"
import Think from './Second/Think'
import NewC from "../MyOwn/RecentCard/NewC"

function Allcom() {
  return (
   <Container>
     <Wrapper>
     
      <NewC/>
      <br/>
      <br/>
     
       {/* <Learn/> */}
       <Think/>
       <br/>
      <br/>
     </Wrapper>
   </Container>
  )
}

export default Allcom

const Container = styled.div``
const Wrapper = styled.div`


`