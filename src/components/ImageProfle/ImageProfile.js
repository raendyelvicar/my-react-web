import React from "react";
import styled from "styled-components";

const ImageSidebar = styled.div`
	background-image: url(/img/IMG-20190801-WA0052.jpg);
	background-size: cover;
	background-size: cover;
	flex: 2;

	@media screen and (min-width: 320px) and (max-width: 768px) {
		display: block;
		background-position: center;
		height: 30%;
	}

	@media screen and (min-width: 768.01px) and (max-width: 1024px) {
		display: block;
		background-position: center;
		height: 60%;
	}

	@media (min-width: 1024.01px) {
		background-position: bottom;
		height: 100%;
	}
`;

const ImageProfile = () => {
	return <ImageSidebar></ImageSidebar>;
};

export default ImageProfile;
