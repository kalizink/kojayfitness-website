import React from "react";
import NavbarComp from "./NavbarComp";
import "./ContactPage.css";
import instagram from "../images/instagram.png";
import email from "../images/email.png";

export default function ContactPage() {
	return (
		<div>
			<NavbarComp />
			<br />
			<div className="ContactPage mt-5">
				<h1 className="text-center">Contact Me</h1>
				<div className="contact-container text-center mt-5">
					<img src={email} alt="no-rel" title="Email" className="img-fluid" />
					<h2>
						<a
							href="mailto:kojayfit@gmail.com"
							alt="no-rel"
							title="Email Jeremiah"
							target="blank">
							kojayfit@gmail.com
						</a>
					</h2>
				</div>
				<div className="contact-container text-center">
					<img
						src={instagram}
						alt="no-rel"
						title="Instagram"
						className="img-fluid"
					/>
					<h2>
						<a
							href="https://www.instagram.com/kojayfitness/?igsh=MXBnOGlzOGtpd3dzZg%3D%3D&utm_source=qr"
							alt="no-rel"
							target="blank"
							title="@kojayfitness">
							@kojayfitness
						</a>
					</h2>
				</div>
			</div>
		</div>
	);
}
