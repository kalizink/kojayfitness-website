import React from "react";
import "./Header.css";

export default function Header() {
	return (
		<div className="Header">
			<h1 className="text-center">Jeremiah Bennett</h1>
			<h2 className="text-center">
				Sports Performance Coach & Personal Trainer in Houston, TX
			</h2>
			<div className="navigation-links text-center mt-5">
				<a href="/" className="contact-link">
					Contact Me
				</a>
				<a
					href="/"
					className="aboutMe-link
                ">
					About Me
				</a>
			</div>
		</div>
	);
}
