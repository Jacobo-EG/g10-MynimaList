import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/AboutUs.css';
import aboutImage from './AboutImage.png'
import { ArrowLeftSquareFill } from "react-bootstrap-icons";

function AboutUs () {

    // State necesario para el modo oscuro
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    let navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    };
  
    return (
        <div className="about-container">
            <div className="text">
                <div className="title">
                    <h1>Sobre nosotros</h1>
                    <span className="back" onClick={() => goBack()}>
                        <ArrowLeftSquareFill size="25" color={checked ? "white" : "black"}  />
                    </span>
                </div>
                <br>{}</br>
                <i>MynimaList</i> nace como una solución simple y efectiva para todos aquellos que quieren generar listas de tareas de forma minimalista y rápida.
                <br>{}</br>
                <br>{}</br>
                <i>MynimaList</i> ha sido desarrollada por un grupo de alumnos del Doble Grado de Ingienería Informática + Matemáticas de la Universidad de Málaga, como 
                proyecto final para la asignatura de <i>Introducción a la Ingienería del Software</i>, donde hemos aprendido tanto metodologías de modelado de software como 
                Scrum, a documentar el proyecto de una forma más completa y parecida a lo que se hace en la realidad y además, hemos tenido un primer contacto con tecnologías 
                como HTML, CSS, React, Java orientado al back-end, Git...
            </div>
            <div className="col-2">
                <img src={aboutImage} alt="Working People"></img>          
            </div>
        </div>
    );
    }
    
export default AboutUs;
