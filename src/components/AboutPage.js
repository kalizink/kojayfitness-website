import React from "react";
import NavbarComp from "./NavbarComp";
import "./AboutPage.css";
import jeremiah1 from "../images/jeremiah1.png";
import jeremiah2 from "../images/jeremiah2.png";
import jeremiah3 from "../images/jeremiah3.png";
import ContactFooter from "./ContactFooter.js";

export default function AboutPage() {
	return (
		<div>
			<NavbarComp />
			<br />
			<div className="AboutPage mt-4">
				<div className="header">
					<h1 className="text-center">About Me</h1>
					<h2 className="text-center">Personal Trainer from California</h2>
					<p>
						{`My name is Jeremiah Bennett, a seasoned sports performance coach and personal trainer, dedicating my expertise to training since 2021. Armed with a Bachelor's degree in Exercise Science from Northern Arizona University and years of football training, I’ve worked with 100’s of athletes and individuals looking to become more explosive and help how to rebuild and prevent injuries. My passion lies in crafting challenging workouts that seamlessly weave together elements of balance, strength, mobility, and athleticism, ensuring each session propels you toward continuous improvement. Make the move and join me now to take your athleticism to the next level!`}
					</p>
				</div>
				<div className="images text-center">
					<div className="row">
						<div className="column">
							<img
								src={jeremiah1}
								alt="no-rel"
								title="Jeremiah Bennett"
								className="img-fluid"
							/>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<img
								src={jeremiah2}
								alt="no-rel"
								title="Jeremiah Bennett"
								className="img-fluid"
							/>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<img
								src={jeremiah3}
								alt="no-rel"
								title="Jeremiah Bennett"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
				<ContactFooter />
			</div>
		</div>
	);
}
