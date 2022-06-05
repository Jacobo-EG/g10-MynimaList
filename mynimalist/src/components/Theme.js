import React, { useEffect, useContext } from "react";
import { Moon } from "react-bootstrap-icons";
import { TaskContext } from "../context";

function Theme () {

    const { checked, setChecked } = useContext(TaskContext)

    // Veo si el modo guardado y lo establezco al entrar a la página
    useEffect(() => {
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
      }, [checked]);

    // Manejo el cambio de tema
    const toggleThemeChange = () => {
        if (checked === false) {
          localStorage.setItem("theme", "dark");
          setChecked(true);
        } else {
          localStorage.setItem("theme", "light");
          setChecked(false);
        }
      };
    
    // Devuelvo el boton de cambio de tema para usarlo en cualquier sitio de la web
    return (
        <div className="theme">
            <span className="theme-span" onClick={() => toggleThemeChange()}>
                <Moon color={checked ? "white" : "black"}/>
            </span>
        </div>
    )
}

export default Theme