import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";
export const Vehiculos = () => {
    const { store, actions } = useContext(Context);
    const [loadingVehiculos, setLoadingVehiculos] = useState(true)
    useEffect(() => {
        actions.obtenerVehiculos().then(resultados => {
            setLoadingVehiculos(false); 
        });
    }, []);

    return (
        <>
            <div>
                
                {loadingVehiculos ? (
                    <p>Cargando...</p>
                ) : (
                    <>
                        <h2 style={{color: '#ffd700'}}>Vehiculos</h2>
                        <div className="card-container">
                            {store.vehiculos.map((vehiculo, index) => (
                                <Card key={index} vehiculo={vehiculo} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};