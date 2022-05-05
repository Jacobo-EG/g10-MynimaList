import React from "react";
import "../styles/Main.css";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Header from "../components/Header";
import Lists from "../components/Lists";
import Tasks from "../components/Tasks";

function Main() {
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
}

export default Main;
