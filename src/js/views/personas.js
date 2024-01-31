import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";
export const Personas = () => {
    const { store, actions } = useContext(Context);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        actions.obtenerPersonas().then(resultados => {
            setLoading(false);
        });
    }, []);

    return (
        <>
            <div>
                
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <>
                        <h2 style={{ color: '#ffd700' }}>Personas</h2>
                        <div className="card-container mb-1">
                            {store.personas.map((person, index) => (
                                <Card key={index} person={person} />
                            ))}
                        </div>
						
                    </>
                )}
            </div>
        </>
    );
};