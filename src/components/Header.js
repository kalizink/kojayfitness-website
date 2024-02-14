import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="Header">
			<h1 className="text-center">Jeremiah Bennett</h1>
			<h2 className="text-center">
				Sports Performance Coach & Personal Trainer in Houston, TX
			</h2>
			<div className="navigation-links text-center mt-5">
				<Link to="/ContactPage" className="contact-link">
					Contact Me
				</Link>

				<Link to="/AboutPage" className="aboutMe-link">
					About Me
				</Link>
			</div>
		</div>
	);
}
