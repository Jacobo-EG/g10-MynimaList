import React, { useState, useEffect } from "react";
import "../styles/Main.css";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Header from "../components/Header";
import Lists from "../components/Lists";
import Tasks from "../components/Tasks";

function Main() {

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const x = document.body.clientWidth;
      setWidth(x);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
  }, [width]);

  if (width > 480) {
    return (
      <div className="Main">
        <Sidebar>
          <Header />
          <Lists />
        </Sidebar>
        <Body>
          <Tasks />
        </Body>
      </div>
    );
  } else {
    return (
      <div className="Main">
        <Sidebar>
          <Lists />
        </Sidebar>
        <Body>
          <Header />
          <Tasks />
        </Body>
      </div>
    );
  }
}

export default Main;
