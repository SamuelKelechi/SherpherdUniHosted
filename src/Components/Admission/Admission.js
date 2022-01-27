import React from 'react'
import styled from 'styled-components'
import Admi from './Admi.js'
import Admin2 from './Admin2.js'
import AdmissionComp from './AdmissionComp.js'
import Card from './Card.js'
import Card2 from './Card2.js'
import Card3 from './Card3.js'
import For from './For.js'
import Inter from "./Inter.js"
import Requirements from './Requirements.js'
import School from './School.js'
import pic from "../Home/Images/3.jpg";

function Admission() {
  return (
    <div>
      <Container>
      <Heading>
				{" "}
				<MainImage src={pic} />
				<Texting>
					Admission <Line></Line>
				</Texting>
			</Heading>
        <Wrapper>
          <AdmissionComp/>
          <Inter/>
          <School/>
          <Admi/>
          <Admin2/>
          {/* <Card/>
          <Card2/>
          <Card3/> */}
          <Requirements/>
          <For/>
        </Wrapper>
      </Container>
      
    </div>
  )
}
export default Admission


const Container = styled.div``
const Wrapper = styled.div`
`
const Line = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	background: #ff512f;
	margin-top: 10px;
	font-weight: bold;
	width: 170px;
	height: 2px;
`;
const Texting = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 25px;
	margin-top: -150px;
	font-weight: bold;
	flex-direction: column;
`;

const MainImage = styled.img`
	height: 300px;
	width: 100%;
	object-fit: cover;

	opacity: 0.1;
	z-index: -1;
`;

const Heading = styled.div`
	height: 300px;
	width: 100%;
	background: #00243a;
`;