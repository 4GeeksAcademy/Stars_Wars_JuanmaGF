import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black mb-3">
			<div className="d-flex align-items-center">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img style={{ width: "70px", height: "50px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="Star Wars Logo" />
					</span>
				</Link>
				<Link to="/planetas" className="btn-link">
					<h6 style={{ color: "#ffd700" }}>Planetas</h6>
				</Link>
				<Link to="/personas" className="btn-link">
					<h6 style={{ color: "#ffd700" }}>Personas</h6>
				</Link>
				<Link to="/vehiculos" className="btn-link">
					<h6 style={{ color: "#ffd700" }}>Vehiculos</h6>
				</Link>

			</div>
			<div className="dropdown ">
				<button style={{ backgroundColor: "#ffd700" }} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos
				</button>
				<ul className="dropdown-menu">

				</ul>
			</div>
		</nav>
	);
};
