import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/AboutUs.css';

function AboutUs () {
    let navigate = useNavigate();
    const handleClickSignUp = () => {
        navigate('/');
    };
  
    return (
        <div className="login-container">
            Somos un grupo de estudiantes de la doble titulación de Matemáticas e Ingeniería Informática en la Universidad de Málaga.
            BlaBlaBla 
        </div>
    );
    }
    
export default AboutUs;
