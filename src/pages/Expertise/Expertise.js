import React from "react";
import styled from "styled-components";
import StackCard from "../../components/Card/StackCard";
import { Heading } from "../../styles/HomeStyles";

const Inner = styled.div`
	padding: 2em;
	margin: auto;
	min-height: 100vh;

	@media (min-width: 1024px) {
		z-index: 1;
		padding: 5em;
	}
`;

const Expertise = () => {
	return (
		<>
			<Inner id="preferences">
				<Heading color="#111" style={{textAlign:"center"}}>Preferences</Heading>
				<StackCard></StackCard>
			</Inner>
		</>
	);
};

export default Expertise;
