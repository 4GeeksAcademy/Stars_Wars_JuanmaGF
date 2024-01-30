import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";

export const Card = ({ person, planeta }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                {person && (
                    <>
                        <h5 className="card-title">{person.properties.name}</h5>
                        <p className="card-text">Gender: {person.properties.gender}</p>
                        <p className="card-text">Hair color: {person.properties.hair_color}</p>
                        <p className="card-text">Eye color: {person.properties.eye_color}</p>
                    </>
                )}

                {planeta && (
                    <>
                        <h5 className="card-title">{planeta.properties.name}</h5>
                        <p className="card-text">Population: {planeta.properties.population}</p>
                        <p className="card-text">Terrain: {planeta.properties.terrain}</p>
                    </>
                )}

                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
};
       