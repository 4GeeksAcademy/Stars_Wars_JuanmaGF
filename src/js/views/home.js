// Home.js
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/Card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.obtenerPersonas();
	}, []);

	return (
		<div>
			<h1>Personas</h1>
			<ul>
				{store.personas.results.map((persona) => (
					<li className="row person" key={persona.uid}>
						<Card persona={persona} />
					</li>
				))}
			</ul>
		</div>
	);
};