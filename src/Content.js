import React from "react";
import logo from "./logo.png";
import "./Content.css";
import EPN1 from "./epn-logo.png";

export default function Content() {
	return (
		<div className="Content mt-5">
			{/* trainerize start */}
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
			{/* trainerize end */}
			{/* EPN start */}
			<div className="row mt-5">
				<div className="col-sm-6 ">
					<img src={EPN1} className="img-fluid" alt="no-rel" />
				</div>
				<div className="col-sm-6 text-content">
					<h2 className="text-center mt-3 line-height">
						Use JBENNETT for 10% OFF
					</h2>
					<div className="text-center mt-5 line-height">
						<a
							href="https://ep-nutrition.com/"
							target="blank"
							title="EPN Supplements"
							className="outside-link">
							Go to Supplements
						</a>
					</div>
				</div>
			</div>
			{/* EPN end */}
		</div>
	);
}
