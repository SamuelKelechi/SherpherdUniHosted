import React, {useEffect} from 'react'
import styled from 'styled-components'
import DCard from "./DCard"
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BsEasel } from 'react-icons/bs';
import { AiOutlineInteraction } from 'react-icons/ai';
import { VscServerEnvironment } from 'react-icons/vsc';
import Aos from "aos"
import "aos/dist/aos.css"



function ALLd() {

  useEffect(()=>{
    Aos.init()
  },[])
  return (
   <Container>
     <Wrapper>
       <DCard  aos="fade-up"  aosda="top-center"  text="Flexible Teaching Structure"  icons= {<Dt/>}/>
       <DCard  aos="fade-up"  aosda="top-center"  text="Learning Made Easy" icons= {<Ds/>}/>
       <DCard  aos="fade-up"  aosda="top-center"  text="Interactive Student Union"  icons= {<Do/>}/>
       <DCard  aos="fade-up"  aosda="top-center"  text="Conducive Learning Environment" icons= {<Dp/>}/>
     </Wrapper>
   </Container>
  )
}

export default ALLd

const Container = styled.div`\
height: auto;
`
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
display: flex;
flex-wrap: wrap;
justify-content:center;
height: auto;

`

const Dt = styled(FaChalkboardTeacher)`
font-size: 75px;
color: #00243A;

transform: scale(1);
transition: all 350ms;

&:hover{
  transform:scale(1.03);
  color: #EF9F27;
};

`
const Ds = styled(BsEasel)`
font-size: 75px;
color: #00243A;

transform: scale(1);
transition: all 350ms;

&:hover{
  transform:scale(1.03);
  color: #EF9F27;
};

`
const Do= styled(AiOutlineInteraction)`
font-size: 75px;
color: #00243A;

transform: scale(1);
transition: all 350ms;

&:hover{
  transform:scale(1.03);
  color: #EF9F27;
};

`
const Dp = styled(VscServerEnvironment)`
font-size: 75px;
color: #00243A;

transform: scale(1);
transition: all 350ms;

&:hover{
  transform:scale(1.03);
  color: #EF9F27;
};

`
