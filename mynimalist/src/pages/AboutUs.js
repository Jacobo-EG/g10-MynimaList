import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/AboutUs.css';
//import logo from './AboutImage.jpg'

function AboutUs () {
    let navigate = useNavigate();
    const handleClickSignUp = () => {
        navigate('/');
    };
  
    return (
        <div className="about-container">
            Sobre nosotros: 

            Somos un grupo de estudiantes de la doble titulación de Matemáticas e Ingeniería Informática en la Universidad de Málaga.
            BlaBlaBla 

            Insertar imagen aqui            

        </div>
    );
    }
    
export default AboutUs;
