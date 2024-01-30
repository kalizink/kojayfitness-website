import React from "react";
import logo from "./logo.png";
import "./Content.css";
import epn1 from "./epn1.png";
import epn2 from "./epn2.png";
import jeremiah from "./jeremiah.png";
import instagram from "./instagram.png";

export default function Content() {
	return (
		<div className="Content mt-5">
			{/* trainerize start */}
			<div className="row">
				<div className="col-sm-6 ">
					<img src={logo} className="img-fluid" alt="no-rel" />
				</div>
				<div className="col-sm-6 text-content">
					<h2 className="text-center mt-3 line-height">Trainerize</h2>
					<h3 className="text-center mt-3 line-height">
						Online training & nutrition programs
					</h3>
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
					<img src={epn1} className="img-fluid" alt="no-rel" /> <br />{" "}
					<div className="text-center">
						<img src={epn2} className="img-fluid epn2" alt="no-rel" />
					</div>
				</div>
				<div className="col-sm-6 text-content">
					<h2 className="text-center mt-3 line-height d-lg-block d-none ">
						Use JBENNETT for 10% OFF
					</h2>
					<h3 className="text-center mt-3 line-height d-sm-block d-lg-none">
						Use JBENNETT for 10% OFF
					</h3>
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
			{/* instagram start */}
			<div className="row mt-5">
				<div className="col-sm-6 ">
					<img
						src={jeremiah}
						className="img-fluid rounded-top rounded-bottom"
						alt="no-rel"
					/>
				</div>
				<div className="col-sm-6 text-content">
					<h2 className="text-center mt-2 line-height">@kojayfitness</h2>
					<div className="text-center mt-5 line-height">
						<div class="text-center">
							<a
								href="https://www.instagram.com/kojayfitness/?igsh=MXBnOGlzOGtpd3dzZg%3D%3D&utm_source=qr"
								target="_blank"
								title="@kojayfitness"
								rel="noreferrer">
								<img
									src={instagram}
									alt="Instagram"
									title="Instagram"
									class="img-fluid instagram "
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* instagram end */}
		</div>
	);
}
