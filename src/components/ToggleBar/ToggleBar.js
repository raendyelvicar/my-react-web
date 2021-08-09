import React, { useState } from "react";
import "../ToggleBar/ToggleBar.css";

const ToggleBar = () => {
	const [clicked, setclicked] = useState(false);
	const [show, setshow] = useState(false);

	const handleClick = () => {
		setshow(!show);
		setclicked(!clicked);
	};

	const handleSidebar = () => {
		setshow(!show);
		setclicked(false);
	};

	return (
		<>
			<div
				className={clicked ? "toggle active" : "toggle"}
				onClick={handleClick}
			>
				<span className="line"></span>
				<span className="line"></span>
			</div>

			<div className={show ? "sidebar active" : "sidebar"}>
				<ul className="menu">
					<li>
						<a href="#banner" onClick={handleSidebar}>
							Home
						</a>
					</li>
					<li>
						<a href="#preferences" onClick={handleSidebar}>
							Preferences
						</a>
					</li>
					{/* <li>
						<a href="#blog" onClick={handleSidebar}>
							Blog
						</a>
					</li> */}
					<li>
						<a href="#contact" onClick={handleSidebar}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ToggleBar;
