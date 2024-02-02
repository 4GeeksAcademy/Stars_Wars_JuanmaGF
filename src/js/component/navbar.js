import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
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
					{
						store.favorites.length == 0 ? <li><a className="dropdown-item">Empty</a></li> :
							store.favorites.map((e, index) => {
								return (
									<li className="favorito" key={index}>
										<div className="col-10">
											<a className="dropdown-item">{e}</a>
										</div>
										<div className="col-2">
											<span><i className="fa-solid fa-trash" onClick={() => {
												actions.deleteFavorite(e)
											}}></i></span>
										</div>
									</li>
								)
							})
					}
				</ul>
			</div>
		</nav>
	);
};
