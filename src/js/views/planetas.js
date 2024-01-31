import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";
export const Planetas = () => {
    const { store, actions } = useContext(Context);
    const [loadingPlanetas, setLoadingPlanetas] = useState(true); 
    useEffect(() => {
       

        actions.obtenerPlanetas().then(resultados => {
            setLoadingPlanetas(false); 
        });
        
    }, []);

    return (
        <>
            <div>
                
                { loadingPlanetas  ? (
                    <p>Cargando...</p>
                ) : (
                    <>
                        
						<h2 style={{color: '#ffd700'}}>Planetas</h2>
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