import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
    return (
       <>
            <div className="container mt-5 " >
                <div className="jumbotron bg-space" >
                    <h1 className="display-4 text-center text-gold">Bienvenido a Star Wars</h1>
                    <p className="lead text-center text-white">Explora el universo de Star Wars</p>
                    <hr className="my-4 bg-gold" />
                    <div className="d-flex justify-content-center">
                    </div>
                </div>
            </div>

        </>
    );
}