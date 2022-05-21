import React, { useState, useEffect, useContext } from "react";
import { Moon } from "react-bootstrap-icons";
import { TaskContext } from "../context";

function Theme () {

    const { checked, setChecked } = useContext(TaskContext)

    useEffect(() => {
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
      }, [checked]);


    const toggleThemeChange = () => {
        if (checked === false) {
          localStorage.setItem("theme", "dark");
          setChecked(true);
        } else {
          localStorage.setItem("theme", "light");
          setChecked(false);
        }
      };

    return (
        <div className="theme">
            <span className="theme-span" onClick={() => toggleThemeChange()}>
                <Moon color={checked ? "white" : "black"}/>
            </span>
        </div>
    )
}

export default Theme