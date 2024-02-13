import React from "react";
import NavbarComp from "./NavbarComp";
import "./AboutPage.css";

export default function AboutPage() {
	return (
		<div className="AboutPage">
			<NavbarComp />
			<div className="container">
				<div className="header">
					<h1 className="text-center">About Me</h1>
					<h2 className="text-center">Personal Trainer from California</h2>
					<p className="text-center">
						{`My name is Jeremiah Bennett, a seasoned sports performance coach and personal trainer, dedicating my expertise to training since 2021. Armed with a Bachelor's degree in Exercise Science from Northern Arizona University and years of football training, I’ve worked with 100’s of athletes and individuals looking to become more explosive and help how to rebuild and prevent injuries. My passion lies in crafting challenging workouts that seamlessly weave together elements of balance, strength, mobility, and athleticism, ensuring each session propels you toward continuous improvement. Make the move and join me now to take your athleticism to the next level!`}
					</p>
				</div>
				<div className="images">
					<div className="row">
						<div className="column">*** bench img ***</div>
					</div>
					<div className="row">
						<div className="column">*** muscles img ***</div>
					</div>
					<div className="row">
						<div className="column">*** 3 img ***</div>
					</div>
				</div>
			</div>
		</div>
	);
}
