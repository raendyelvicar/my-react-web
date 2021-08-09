import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const IMAGE_FILE = [
	{
		title: "HTML",
		content: "html",
	},
	{
		title: "CSS",
		content: "css",
	},
	{
		title: "Javascript",
		content: "javascript",
	},
	{
		title: "ReactJS",
		content: "reactjs",
	},
	{
		title: "NodeJS",
		content: "nodejs",
	},
	{
		title: "Laravel",
		content: "laravel",
	},
	{
		title: "Spring Boot",
		content: "spring",
	},
	{
		title: "Figma",
		content: "figma",
	},
	{
		title: "Photoshop",
		content: "photoshop",
	},
];
const useStyles = makeStyles({
	root: {
		background: "#f0f0f0",
		borderWidth: "20px",
		maxWidth: 300,
	},
	title: {
		fontSize: 16,
		textAlign: "center",
		fontWeight: 700,
	},
	pos: {
		marginBottom: 12,
	},
	media: {
		width: "100%",
		position: "relative",
		padding: "2em",
	},
});

const StackCard = () => {
	const classes = useStyles();
	const card = IMAGE_FILE.map((item) => (
		<SwiperSlide>
			<Card className={classes.root}>
				<img
					className={classes.media}
					src={process.env.PUBLIC_URL + "/img/stack/" + item.content + ".png"}
					alt={item.title}
				/>
				<CardContent>
					<Typography className={classes.title}>{item.title}</Typography>
				</CardContent>
			</Card>
		</SwiperSlide>
	));
	return (
		<>
			<Swiper
				loop
				spaceBetween={10}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				breakpoints={{
					324: {
						slidesPerView: 3,
					},
					// when window width is >= 640px
					640: {
						slidesPerView: 3,
					},
					// when window width is >= 768px
					768: {
						slidesPerView: 4,
					},
				}}
			>
				{card}
			</Swiper>
		</>
	);
};

export default StackCard;
