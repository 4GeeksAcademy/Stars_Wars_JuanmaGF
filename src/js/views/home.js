import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [loadingPlanetas, setLoadingPlanetas] = useState(true); // Nuevo estado para planetas

    useEffect(() => {
        actions.obtenerPersonas().then(resultados => {
            setLoading(false);
        });

        actions.obtenerPlanetas().then(resultados => {
            setLoadingPlanetas(false); // Marcar la carga de planetas como completa
        });
    }, []);

    return (
        <>
            <div>
                <h2 style={{ color: 'red' }}>Personas de Star Wars</h2>
                {loading || loadingPlanetas ? (
                    <p>Cargando...</p>
                ) : (
                    <>
                        <div className="card-container mb-1">
                            {store.personas.map((person, index) => (
                                <Card key={index} person={person} />
                            ))}
                        </div>
						<h2 style={{color: 'red'}}>Planetas de Star Wars</h2>
                        <div className="card-container">
                            {store.planetas.map((planeta, index) => (
                                <Card key={index} planeta={planeta} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};