import React, { useState, useContext, useEffect } from "react";
import "../styles/Header.css";
import { BoxArrowRight, List } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context";
import Theme from "./Theme";

function Header() {
  const { setSelectedList, checked, isOpen, setIsOpen } = useContext(TaskContext);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const x = document.body.clientWidth;
      setWidth(x);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
  }, [width, checked]);

  let navigate = useNavigate();
  const handleClickLogOut = () => {
    localStorage.setItem("token", "no");
    setSelectedList(-1);
    navigate("/");
  };

  if (width > 480) {
    return (
      <div className="Header">
        <p>MynimaList</p>
        <div className="header-buttons">
          <Theme />
          <span className="logout" onClick={handleClickLogOut}>
            <BoxArrowRight size="20" color={checked ? "white" : "black"} />
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Header">
        <span className="menu">
        <List size="30" onClick={() => setIsOpen(!isOpen)} color={checked ? "white" : "black"} />
        </span>
        <p>MynimaList</p>
        <div className="header-buttons">
          <Theme />
          <span className="logout" onClick={handleClickLogOut}>
            <BoxArrowRight size="20" color={checked ? "white" : "black"} />
          </span>
        </div>
      </div>
    );
  }
}

export default Header;

