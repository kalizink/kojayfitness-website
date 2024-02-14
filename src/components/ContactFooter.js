import React from "react";
import "./ContactFooter.css";

export default function ContactFooter() {
	return (
		<div className="ContactFooter text-center">
			<h3> 📮 Contact Me</h3>
			<p>
				<a
					href="mailto:kojayfit@gmail.com"
					alt="no-rel"
					title="Email Jeremiah"
					target="blank">
					kojayfit@gmail.com
				</a>
			</p>
			<p>
				<a
					href="https://www.instagram.com/kojayfitness/?igsh=MXBnOGlzOGtpd3dzZg%3D%3D&utm_source=qr"
					alt="no-rel"
					target="blank"
					title="@kojayfitness">
					@kojayfitness
				</a>
			</p>
		</div>
	);
}
