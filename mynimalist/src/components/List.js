import React, { useState } from "react";
import "../styles/List.css";
import ListButtons from "./ListButtons";

function List({ list }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="List"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="name">{list.name}</div>
      <div className="buttons">
        {hover && 
          <ListButtons list={list}/>
        }
      </div>
    </div>
  );
}

export default List;
