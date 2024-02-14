import React from "react";
import NavbarComp from "./NavbarComp";
import "./ContactPage.css";

export default function ContactPage() {
	return (
		<div className="ContactPage">
			<NavbarComp />
			<br />
			<div className="container mt-5">
				<h1>Contact Me</h1>
			</div>
		</div>
	);
}
