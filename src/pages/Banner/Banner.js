import React from "react";
import styled from "styled-components";
import Content from "../../components/Content/Content";
import ImageProfile from "../../components/ImageProfle/ImageProfile";
import ToggleBar from "../../components/ToggleBar/ToggleBar";

const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	z-index: 1;
	min-height: 100vh;
`;
const Banner = () => {
	return (
		<>
			<ToggleBar></ToggleBar>
			<FlexContainer id="banner">
				<ImageProfile></ImageProfile>
				<Content></Content>
			</FlexContainer>
		</>
	);
};

export default Banner;
