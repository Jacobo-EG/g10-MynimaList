import React, { useState } from "react";
import "../styles/Lists.css";
import AddNewList from "./AddNewList";
import List from "./List";

function Lists() {

  const lists = [
    { id: 1, name: "metodos" },
    { id: 2, name: "compleja" },
    { id: 3, name: "curvas" }
  ]

  return (
    <div className="Lists">
      <div className="header">
        <div className="title">
          <p>Listas</p>
        </div>
        <div className="buttons">
          <AddNewList />
        </div>
      </div>

      <div className="items">
        {
          lists.map( list => 
            <List list={list} key={list.id}/>  
          )
        }
      </div>
    </div>
  );
}

export default Lists;
