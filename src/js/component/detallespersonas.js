import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonDetails = () => {
    const { id } = useParams();
    const { store } = useContext(Context);
    const [person, setPerson] = useState(null);

    useEffect(() => {
        
        const foundPerson = store.personas.find(person => person.uid === id);

        
        setPerson(foundPerson);
    }, [store.personas, id]);

    if (!person) {
        return <p>Persona no encontrada</p>;
    }

    return (
        <>
            <div className="card row mb-3 w-100 vh-50 " style={{ maxWidth: "800" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img style={{height: "400", width: "600"}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{person.properties.name}</h5>
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
                        <ul className="list-unstyled"> <strong>Height:</strong>
                            <li>
                                 {person.properties.height}
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled">  <strong>Birth Year:</strong>
                            <li>
                                {person.properties.birth_year}
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled"> <strong>Skin Color:</strong>
                            <li>
                                {person.properties.skin_color}
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled"> <strong>Mass:</strong>
                            <li>
                                {person.properties.mass}
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled">    <strong>Gender:</strong>
                            <li>
                                {person.properties.gender}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};