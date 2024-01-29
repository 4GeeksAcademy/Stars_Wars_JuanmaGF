import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Card = ({ persona }) => {
	const { actions } = useContext(Context);

	useEffect(() => {
		actions.obtenerPersonas();
	}, []);

	return (
		<div className="card" style={{ width: '18rem' }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{persona.name}</h5>
				<p className="card-text">{persona.uid}</p>
				<p className="card-text">{persona.url}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;