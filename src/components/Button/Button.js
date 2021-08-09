import React from "react";
import styled from "styled-components";

const Btn = styled.button`
	padding: 0.75em;
	cursor: pointer;
	background: #00bcd4;
	color: #fff;
	font-size: 1.5em;
	font-weight: 700;
	border: none;
	width: 25%;
	left: 0;
	&:hover {
		background: #00acc2;
	}

	@media screen and (min-width: 1024px) {
		font-size: 1.1em;
	}
`;

const Button = ({ text }) => {
	return (
		<>
			<Btn>{text}</Btn>
		</>
	);
};

export default Button;
