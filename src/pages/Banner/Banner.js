import React from "react";
import styled from "styled-components";
import Content from "../../components/Content/Content";
import ImageProfile from "../../components/ImageProfle/ImageProfile";
import ToggleBar from "../../components/ToggleBar/ToggleBar";

const PageBreak = styled.div`
	padding: 2em;
	margin: auto;
	min-height:150px;

	@media (min-width: 1024px) {
		z-index: 1;
		padding: 5em;
	}
`;

const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
`;

const Banner = () => {
	return (
		<>
			<ToggleBar></ToggleBar>
			<FlexContainer id="banner">
				<ImageProfile></ImageProfile>
				<Content></Content>
			</FlexContainer>
		<PageBreak></PageBreak>
		</>
	);
};

export default Banner;
