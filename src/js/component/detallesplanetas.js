import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetaDetails = () => {
    const { id } = useParams();
    const { store } = useContext(Context);
    const [planet, setPlanet] = useState(null);
    const [image, setImage] = useState(null);
    useEffect(() => {
       
        const foundPlanet = store.planetas.find(planet => planet.uid === id);

        
        setPlanet(foundPlanet);
        const getImage = async () => {
            try {
                const response = await fetch(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`);
                if (response.ok) {
                    setImage(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`);
                } else {
                    console.error(`No se pudo obtener la imagen para el planeta con ID ${id}`);
                }
            } catch (error) {
                console.error(`Error al obtener la imagen: ${error}`);
            }
        };
    
        getImage();
    }, [store.planet, id]);

    if (!planet) {
        return <p>Planeta no encontrado</p>;
    }

    return (
         <>
            <div className="card row mb-3 w-100 vh-50 " style={{ maxWidth: "800" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    {image && <img style={{ height: "400", width: "600" }} src={image} className="img-fluid rounded-start" alt="Character" />}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{planet.properties.name}</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet massa ut mi aliquam, ac hendrerit ante cursus. Proin fermentum malesuada risus, ut vehicula mauris mollis ultricies. Suspendisse quis lectus justo. Suspendisse sed turpis tristique, tristique velit et, laoreet tellus. Morbi fringilla turpis erat, ut consequat dui aliquam in. Suspendisse bibendum posuere neque, ac consequat felis interdum et. Nulla facilisi.

                                In dignissim, felis vel posuere lacinia, dolor nibh finibus nulla, at luctus ante eros sed nisl. Sed ultricies tortor urna, sit amet mollis urna tincidunt non. Nulla facilisi. Phasellus id libero varius risus luctus condimentum eu eget ipsum. Nunc mauris ligula, vehicula vel arcu quis, venenatis elementum risus. Praesent ultricies quam non tristique rhoncus. Aliquam pharetra, lectus ut porttitor condimentum, risus nisi viverra leo, non fermentum metus nibh eget neque. Sed a risus dui. Donec tincidunt dui vitae pretium viverra. Sed vestibulum lobortis enim eu dignissim. In ut ligula vehicula, lacinia neque fringilla, porttitor lacus.

                                Donec lobortis leo sed risus aliquet, quis feugiat enim ultrices. Praesent tincidunt urna id ex mollis, sed tempus mi blandit. Cras sit amet arcu et velit tristique ultrices a in massa. In rhoncus, nisl nec dapibus convallis, tellus arcu ornare mi, a maximus erat nulla ut sem. Aenean vel maximus magna. Nam laoreet sodales convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris dignissim cursus erat, sed imperdiet est sollicitudin nec. Sed tristique purus a tortor suscipit consectetur. Proin eleifend tincidunt velit, ac fermentum neque interdum ut. Ut eu nunc ac urna aliquet posuere at vel ante.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vista-detalles container vh-50" style={{color: "#ffd700"}}>
                <div className="row align-items-start">
                    <div className="col">
                        <ul className="list-unstyled"> <strong>Diameter:</strong>
                            <li>
                                 {planet.properties.diameter}
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled">  <strong>Gravity:</strong>
                            <li>
                                {planet.properties.gravity}
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled"> <strong>Population:</strong>
                            <li>
                                {planet.properties.population}
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled"> <strong>Climate:</strong>
                            <li>
                                {planet.properties.climate}
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled">    <strong>Orbital Period:</strong>
                            <li>
                                {planet.properties.orbital_period}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};