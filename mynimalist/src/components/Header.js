import React, { useState, useContext, useEffect } from "react";
import "../styles/Header.css";
import { BoxArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context";
import Theme from "./Theme";

<script src="path/to/dist/feather.js"></script>

function Header() {
  const { setSelectedList, checked } = useContext(TaskContext);

  let navigate = useNavigate();
  const handleClickLogOut = () => {
    setSelectedList(-1);
    navigate("/");
  };

  useEffect( () => {
    
  }, [checked])

  return (
    <div className="Header">
      <p>MynimaList</p>
      <Theme />
      <span className="logout" onClick={handleClickLogOut}>
        <BoxArrowRight size="20" color={checked ? "white" : "black"} />
      </span>
    </div>
  );
}

export default Header;
