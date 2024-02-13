import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavbarComp.css";

export default function NavbarComp() {
	return (
		<Navbar bg="dark" variant="dark" fixed="top" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/" className="link">
						KojayFitness
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav>
							<Link to="/" className="link">
								{" "}
								Home
							</Link>
						</Nav>
						<Nav>
							<Link to="/AboutPage" className="link">
								{" "}
								About
							</Link>
						</Nav>
						<Nav>
							<Link to="/AboutPge" className="link">
								{" "}
								Contact
							</Link>
						</Nav>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
