import styled from "styled-components";
import React from "react";
import { BoxText, Heading, SubHeading } from "../../styles/HomeStyles";
import Button from "../Button/Button";
import SocialMedia from "../SocialMedia/SocialMedia";

const Inner = styled.div`
	padding: 2em;
	display: flex;
	flex-direction: column;
	margin: auto;
	min-height:100vh;

	@media (min-width: 1024px) {
		z-index: 1;
		flex: 3;
		padding: 5em;
	}
`;

const Content = () => {
	return (
		<>
			<Inner>
				<SubHeading>Hello, my name is</SubHeading>
				<Heading color="#111">Raendy Andhika El Vicar</Heading>
				<SubHeading>
					Passionate about Front-End Development and UI/UX Design
				</SubHeading>
				<BoxText>
					I am a person who is committed to learning and self development, so
					that I can consistently achieve better results. Furthermore, I am
					highly motivated for building a career in tech, design and business
					field, to which I would bring dedication and enthusiasm for my work.
				</BoxText>
				<Button text="Download CV"></Button>
				<SocialMedia></SocialMedia>
			</Inner>
		</>
	);
};

export default Content;
