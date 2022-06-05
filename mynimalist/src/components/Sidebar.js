import React, { useState, useEffect, useContext } from "react";
import "../styles/Sidebar.css";
import { List } from "react-bootstrap-icons";
import { TaskContext } from "../context";

function Sidebar({ children }) {

  // State necesario para la barra en versión móvil
  const { isOpen, setIsOpen } = useContext(TaskContext);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const x = document.body.clientWidth;
      setWidth(x);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
  }, [width]);

  // Hago un renderizado condicion en función de si estoy en móvil o no
  if (width > 480) {
    return <div className="Sidebar">{children}</div>;
  } else {
    return (
      <>
        {isOpen ? (
          <div className="Sidebar">
            {children}
          </div>
          ) :
          <>
          </>
        }
      </>
    );
  }
}

export default Sidebar;
