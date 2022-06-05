import React, { useContext, useState } from "react";
import "../styles/List.css";
import ListButtons from "./ListButtons";
import { TaskContext } from "../context";

function List({ list }) {
  // STATE
  const [hover, setHover] = useState(false);

  // CONTEXT
  const { setSelectedList } = useContext(TaskContext)


  return ( // Devuelvo todos los elementos que componen una lista junto a sus botones
    <div
      className="List"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="name" onClick={() => setSelectedList(list.id)}>{list.name}</div>
      <div className="buttons">
        {hover && // Hago un renderizado condicional en funcion de si el raton esta encima de lista o no 
          <ListButtons list={list}/>
        }
      </div>
    </div>
  );
}

export default List;
