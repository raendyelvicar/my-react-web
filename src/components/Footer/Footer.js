import React from "react";
import "./Footer.css";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
	return (
		<>
			<div>
				<div className="copyright">
					<SocialMedia></SocialMedia>
					<p>Copyright &copy; 2021. All Rights Reserved.</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
