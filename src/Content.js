import React from "react";
import logo from "./logo.png";
import "./Content.css";

export default function Content() {
	return (
		<div className="Content mt-5">
			<section>
				<img src={logo} className="img-fluid" alt="no-rel" />
				<h1 className="text-center mt-3">Trainerize</h1>
				<h2 className="text-center mt-3">
					Online training & nutrition programs
				</h2>
				<div className="text-center mt-5">
					<a
						href="https://www.trainerize.me/profile/kojayfitness/Jeremiah.Bennett/"
						target="blank"
						title="Go to trainerize"
						className="outside-link">
						Go To Trainerize
					</a>
				</div>
			</section>
		</div>
	);
}
