import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";
import { Link } from "react-router-dom";

export const Card = ({ person, planeta, vehiculo }) => {
    const { store, actions } = useContext(Context);
    const getEntityDetailsPath = (entityType, id) => {
        return `/${entityType}/${id}`;
    };



    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                {person && (
                    <>
                        <h5 className="card-title">{person.properties.name}</h5>
                        <p className="card-text">Gender: {person.properties.gender}</p>
                        <p className="card-text">Hair color: {person.properties.hair_color}</p>
                        <p className="card-text">Eye color: {person.properties.eye_color}</p>
                        <Link to={getEntityDetailsPath("personas", person.uid)}>
                            <button type="button" className="btn btn-outline-primary" >
                                Learn More!
                            </button>
                        </Link>
                        <button type="button" className="btn btn-outline-primary "  style={{ marginLeft: '10px' }} onClick={() =>{
                            actions.setFavorites(person)
                        }}>
                        <i className="fas fa-heart"></i>
                        </button>
                    </>
                )}

                {planeta && (
                    <>
                        <h5 className="card-title">{planeta.properties.name}</h5>
                        <p className="card-text">Population: {planeta.properties.population}</p>
                        <p className="card-text">Terrain: {planeta.properties.terrain}</p>
                        <Link to={getEntityDetailsPath("planetas", planeta.uid)}>
                            <button type="button" className="btn btn-outline-primary">
                                Learn More!
                            </button>
                        </Link>
                        <button type="button" className="btn btn-outline-primary "  style={{ marginLeft: '10px' }}>
                        <i className="fas fa-heart"></i>
                        </button>
                    </>
                )}
                {vehiculo && (
                    <>
                        <h5 className="card-title">{vehiculo.properties.name}</h5>
                        <p className="card-text">Manufactured: {vehiculo.properties.manufactured}</p>
                        <p className="card-text">Model: {vehiculo.properties.model}</p>
                        <Link to={getEntityDetailsPath("vehiculos", vehiculo.uid)}>
                            <button type="button" className="btn btn-outline-primary" >
                                Learn More!
                            </button>
                        </Link>
                        <button type="button" className="btn btn-outline-primary "  style={{ marginLeft: '10px', }}>
                        <i className="fas fa-heart"></i>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};