import React from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import ProfCourse from "./ProfCourse";
import Requirements from "./Requirements";

const AdmissionComp = () => {
	return (
		<Container>
			<h3>ACCREDITED COURSES/PROGRAMS</h3>
			<p>which enable student of Nigerian extraction to go for NYSC.</p>
			<MainWrapper>
				<FirstComp>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>
							Linguistics(French and English , Interpretation and Translation)
						</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Business Administration</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>International Relation / Political Science</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Mass Communication</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Human Resource Management</Text>
					</TextHold>
				</FirstComp>
				<FirstComp>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Transport & Logistic Management</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Accountancy</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Computer Science</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>
							Pre Degree / Foundation program in french and English for one
							academic year
						</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Economics, Banking and Finance</Text>
					</TextHold>
				</FirstComp>
				<FirstComp>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Psychology</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>BSc Conversion</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>HND Conversion</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>International Relation / Political Science</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Accelerated Programmers at master level</Text>
					</TextHold>
				</FirstComp>
			</MainWrapper>

			<ProfCourse />
			<br />
			<br />
			<br />
			
		</Container>
	);
};

export default AdmissionComp;

const TextHold = styled.div`
	display: flex;
	align-items: center;

	span {
		margin-top: 15px;
	}
`;
const Text = styled.div`
	width: 300px;
	margin-left: 10px;
	font-size: 15px;
`;
const FirstComp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 10px;
	background-color: #014E62;
	height: 200px;
	color: white;
	border-radius: 8px;
	padding: 3px;
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
		width: 90%;
	}
	/* background-color: black; */
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;

	@media (max-width: 768px) {
		display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
		h3 {
			text-align: center;
		}

		p {
			/* text-align: center; */
			font-size: 12px;
            p
		}
	}
	/* background-color: red; */
	h3 {
		margin-top: 20px;
		color: #014E62;
		/* height: 0; */
	}

	p {
		margin-top: 5px;
		color: #014E69;

	}
`;
