import React from "react";
import styled from "styled-components";

const Btn = styled.button`
	padding: 1em;
	cursor: pointer;
	background: #00bcd4;
	color: #fff;
	font-size: 14px;
	font-weight: 700;
	border: none;
	width: 50%;
	left: 0;
	&:hover {
		background: #00acc2;
	}

	@media screen and (min-width: 1024px) {
		font-size: 16px;
		width:30%;
		padding:0.75em;
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
