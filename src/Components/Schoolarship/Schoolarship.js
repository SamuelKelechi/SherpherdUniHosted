import React from "react";
import styled from "styled-components";
import pic from "../Home/Images/3.jpg";
import { AiFillCheckCircle } from "react-icons/ai";

const Schoolarship = () => {
	return (
		<Container>
			<Heading>
				{" "}
				<MainImage src={pic} />
				<Texting>
					Scholarship <Line></Line>
				</Texting>
			</Heading>
			<br />

			<Holder>
				{" "}
				<h2>
					GET SCHOLARSHIP INTO GREAT SHEPHERD UNIVERSITY,PORTO -NOVO BENIN
					REPUBLIC NOW! CONDITIONS OF ELIGIBILITY/REQUIREMENTS
				</h2>
				<MainHold>
					<FirstComp>
						<p>CONDITIONS OF ELIGIBILITY/REQUIREMENTS </p>
						<TextHold>
							<span>
								<AiFillCheckCircle />
							</span>
							<Text>
								O'Level results (WAEC,NECO) with five credits including
								Mathematics and English Language in a single sitting .
							</Text>
						</TextHold>
						<TextHold>
							<span>
								<AiFillCheckCircle />
							</span>
							<Text>
								Candidates should not be above nineteen(19) years of age
							</Text>
						</TextHold>
						<TextHold>
							<span>
								<AiFillCheckCircle />
							</span>
							<Text>
								Candidates should be willing and ready to study both french and
								English languages and pass basic examinations(Internal and
								external )
							</Text>
						</TextHold>
						<TextHold>
							<span>
								<AiFillCheckCircle />
							</span>
							<Text>Travelling documents (International passport)</Text>
						</TextHold>
						<TextHold>
							<span>
								<AiFillCheckCircle />
							</span>
							<Text>Four passport size photographs</Text>
						</TextHold>
						<TextHold>
							<span>
								<AiFillCheckCircle />
							</span>
							<Text>Two passport photographs of sponsors</Text>
						</TextHold>
						<TextHold>
							<span>
								<AiFillCheckCircle />
							</span>
							<Text>A rim of A4 size paper </Text>
						</TextHold>
						<TextHold>
							<span>
								<AiFillCheckCircle />
							</span>
							<Text>A copy of birth certificate </Text>
						</TextHold>
						<TextHold>
							<span>
								<AiFillCheckCircle />
							</span>
							<Text>
								Medical fitness certificate from a government recognised
								hospital.{" "}
							</Text>
						</TextHold>
					</FirstComp>
					<ImageHold src={pic} />
				</MainHold>
			</Holder>
		</Container>
	);
};

export default Schoolarship;

const MainHold = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	background-color: #19394d;
	color: white;

	border-radius: 10px;
	padding: 20px;

	@media screen and (max-width: 760px) {
		padding: 0;
	}

	p {
		font-weight: bold;
	}
`;
const ImageHold = styled.img`
	height: auto;
	width: 600px;
	object-fit: cover;
	border: 1px solid silver;
	margin: 20px;
	border-radius: 5px;

	@media screen and (max-width: 760px) {
		width: 90%;
	}
`;
const TextHold = styled.div`
	display: flex;
	/* align-items: center; */
	/* margin: 10px; */
	padding-bottom: 20px;
	span {
		margin-top: 5px;
	}
`;
const Text = styled.div`
	width: 320px;

	font-size: 17px;
`;
const FirstComp = styled.div`
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;

	margin: 20px;
	/* margin-top: -10px; */
	/* margin-left: 40px; */

	/* margin-top: 10px; */
`;

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

const Holder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;

	h2 {
		width: 60%;
		font-size: 19px;

		@media screen and (max-width: 600px) {
			width: 100%;
			font-size: 13px;
		}
	}
`;
const Heading = styled.div`
	height: 300px;
	width: 100%;
	background: #00243a;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 80vh;
`;
