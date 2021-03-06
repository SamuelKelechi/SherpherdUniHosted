import React from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
const Requirements = () => {
	return (
		<Container>
			<TextUp>Admission Requirements</TextUp>

			<MainWrapper>
				<FirstComp>
					<TextHold>
						{" "}
						<Text>
							<span>	
								<AiFillCheckCircle />A copy of O'Level results (WAEC, NECO) in not more than two sittings including
								English Language and Mathematics.
							</span>
						</Text>
					</TextHold>
					<br/>
					<TextHold>
						{" "}
						<Text>
							<span> 
								<AiFillCheckCircle />A copy of birth Certificate
							</span>
						</Text>
					</TextHold>
					<br/>
					<TextHold>
						{" "}
						<Text>
							<span>
								<AiFillCheckCircle />Four passport size photographs with coloured background in an A4 envelope.
							</span>
						</Text>
					</TextHold>
				</FirstComp>
				<FirstComp>
					<TextHold>
						{" "}
						<Text>
							<span>
								<AiFillCheckCircle />Travelling documents (international passport only)
							</span>
						</Text>
					</TextHold>
					<br/>
					<TextHold>
						{" "}
						<Text>
							<span>
								<AiFillCheckCircle />Two passport photographs of sponsors
							</span>
						</Text>
					</TextHold>
					<br/>
					<TextHold>
						{" "}
						<Text>
							<span>
								<AiFillCheckCircle />A rim of A4 size paper
							</span>
						</Text>
					</TextHold>
					<br/>
					<TextHold>
						{" "}
						<Text>
							<span>
								<AiFillCheckCircle />Those with direct entry and conversion, the above requirements
								should be accompanied.
							</span>
						</Text>
					</TextHold>
				</FirstComp>
			</MainWrapper>
			<br />
			<br />
			<CardHold>
				<Card1 bg='#014e62'>
					{" "}
					<FirstComp>
						<h3>OUR FACILITIES</h3>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>
								Well qualified team of staff (PHD holders, professors and
								associate professors)
							</Texting>
						</TextHold>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>
								Well ventilated lecture rooms with modern furniture and spacious
								arena to guarantee comfort{" "}
							</Texting>
						</TextHold>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>Wi-fi</Texting>
						</TextHold>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>Well equipped library</Texting>
						</TextHold>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>
								ICT Programmes with new horizon to make our students more I.C.T Compliance.
							</Texting>
						</TextHold>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>Computer laboratory</Texting>
						</TextHold>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>
								Language laboratory with new devices to ensure the best form of
								learning by beginners
							</Texting>
						</TextHold>
					</FirstComp>
				</Card1>

				<SecondHold>
					<Card1 bg='#338497'>
						{" "}
						<FirstComp>
							<h3>ACADEMIC CALENDAR</h3>
							<TextHold>
								{" "}
								<span>
									<AiFillCheckCircle />
								</span>
								<Texting>1st Semester : September - December</Texting>
							</TextHold>
							<TextHold>
								{" "}
								<span>
									<AiFillCheckCircle />
								</span>
								<Texting>2nd Semester : january - April </Texting>
							</TextHold>
							<TextHold>
								{" "}
								<span>
									<AiFillCheckCircle />
								</span>
								<Texting>3rd Semester : May - July</Texting>
							</TextHold>
						</FirstComp>
					</Card1>
					<Card1 bg='#ff512f'>
						{" "}
						<FirstComp>
							<h3>ADMISSION PROCESSING</h3>
							<TextHold>
								{" "}
								<span>
									<AiFillCheckCircle />
								</span>
								<Texting>April - September</Texting>
							</TextHold>
							<TextHold>
								{" "}
								<span>
									<AiFillCheckCircle />
								</span>
								<Texting>December - April </Texting>
							</TextHold>
							<TextHold>
								{" "}
								<Texting>
									Note that admission is on going due to our flexible academic
									calendar
									<br />
									<br />
									<span style={{ fontWeight: "bold" }}>
										For more enquiries contact
									</span>{" "}
									<br /> 
									The Admission Officer: +234 7030407955, +229 94342669 
									<br />
									The Registrar: +234 8035034209, +229 61390939
									<br /> 
									Email : esepgsadmissions@gmail.com
								</Texting>
							</TextHold>
						</FirstComp>
					</Card1>
				</SecondHold>
			</CardHold>
		</Container>
	);
};

export default Requirements;

const SecondHold = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (max-width: 750px){
		width: 100%
	}
`;
const CardHold = styled.div`
	/* padding-bottom: 30px; */
	display: flex;
	flex-wrap: wrap;
`;
const Card1 = styled.div`
	/* width: 300px; */
	background: ${({ bg }) => bg};
	color: white;
	padding: 20px;
	border-radius: 10px;
	margin: 10px;
	padding-bottom: 20px; /* height: 300px; */
	@media screen and (max-width: 760px) {
		padding: 10px;
	}
`;

const TextHold = styled.div`
	display: flex;
	align-items: flex-start;
`;
const Texting = styled.div`
	width: 330px;
	margin-left: 10px;
	font-size: 14px;

	@media screen and (max-width: 760px) {
		width: 300px;
	}
`;
const Text = styled.div`
	width: 350px;
	margin-left: 10px;
	font-size: 20px;

	@media screen and (max-width: 760px) {
		width: 300px;
		margin-left: 10px;
		font-size: 15px;
	}
`;
const FirstComp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 10px;
`;

const MainWrapper = styled.div`
	width: 80%;
	display: flex;
	justify-content: center;
	/* align-items: center; */
	flex-wrap: wrap;

	margin-left: 50px;

	@media screen and (max-width: 760px) {
		margin-left: 0;
	}
	/* background-color: black; */
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const TextUp = styled.div`
	height: 70px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 25px;
	background: #01409d;
	width: 100%;
	color: white;
`;
