import React from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import NavbarComp from "./NavbarComp";
import ContactFooter from "./ContactFooter";

export default function App() {
	return (
		<div className="App">
			<NavbarComp />
			<div className="container mt-5">
				<Header />
				<br />
				<Content />
				<br />
				<ContactFooter id="contact" />
			</div>
		</div>
	);
}
