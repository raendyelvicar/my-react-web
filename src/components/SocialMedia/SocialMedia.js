import React from "react";
import "./SocialMedia.css";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
const SocialMedia = () => {
	return (
		<>
			<div>
				<ul className="icon__social-media">
					<li>
						<a
							href="https://linkedin.com/in/raendyelvicar"
							target="_blank"
							rel="noreferrer"
						>
							<IoLogoLinkedin className="io-icon" />
						</a>
					</li>
					<li>
						<a
							href="https://instagram.com/raendy.elvicar"
							target="_blank"
							rel="noreferrer"
						>
							<IoLogoInstagram className="io-icon" />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/raendyelvicar"
							target="_blank"
							rel="noreferrer"
						>
							<IoLogoGithub className="io-icon" />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SocialMedia;
