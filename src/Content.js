import React from "react";
import logo from "./logo.png";
import "./Content.css";

export default function Content() {
	return (
		<div className="Content mt-5">
			<div className="row">
				<div className="col-sm-6 ">
					<img src={logo} className="img-fluid" alt="no-rel" />
				</div>
				<div className="col-sm-6 text-content">
					<h1 className="text-center mt-3 line-height">Trainerize</h1>
					<h2 className="text-center mt-3 line-height">
						Online training & nutrition programs
					</h2>
					<div className="text-center mt-5 line-height">
						<a
							href="https://www.trainerize.me/profile/kojayfitness/Jeremiah.Bennett/"
							target="blank"
							title="Go to trainerize"
							className="outside-link">
							Go To Trainerize
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
