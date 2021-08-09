import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { Heading } from "../../styles/HomeStyles";
import { IoIosMail, IoIosCall } from "react-icons/io";
import "./Contact.css";

const Inner = styled.div`
	padding: 2em;
	margin: auto;
	min-height: 100vh;

	@media (min-width: 1024px) {
		z-index: 1;
		padding: 5em;
	}
`;

const sendEmail = () =>{
	alert("Silakan hubungi langsung melalui raendy.elvicar@gmail.com. Terima Kasih :)")
}

const Contact = () => {
	return (
		<>
			<div>
				<Inner className="contact" id="contact">
					<Heading color="#fff">Contact</Heading>
					<div className="contact__box">
						<div className="row">
							<div className="box col-50 col-md-100">
								<p>
									<IoIosCall size="2em" />
									+62 857 1902 5613
								</p>
							</div>
							<div className="box col-50 col-md-100">
								<p>
									<IoIosMail size="2em" />
									raendy.elvicar@gmail.com
								</p>
							</div>
						</div>
					</div>

					<div className="form__contact">
						<form onSubmit={sendEmail}>
							<div className="row">
								<div className="col-50 col-md-100">
									<label for="Name"></label>
									<input name="name" type="text" placeholder="Your Name" />
								</div>
								<div className="col-50 col-md-100">
									<label for="Email"></label>
									<input name="email" type="text" placeholder="Your Email" />
								</div>
							</div>
							<div className="row">
								<div className="col-100">
									<label for="Message"></label>
									<textarea
										name="message"
										id="message"
										cols="30"
										rows="10"
										placeholder="Your Message"
									></textarea>
								</div>
							</div>
							<div className="row">
								<div className="col-100">
									<Button text="Send"></Button>
								</div>
							</div>
						</form>
					</div>
				</Inner>
			</div>
		</>
	);
};

export default Contact;
