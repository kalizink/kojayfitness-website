import React from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Header />
				<br />
				<Content />
			</div>
		</div>
	);
}
