import React from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import NavbarComp from "./NavbarComp";

export default function App() {
	return (
		<div className="App">
			<NavbarComp />
			<div className="container">
				<Header />
				<br />
				<Content />
			</div>
		</div>
	);
}
