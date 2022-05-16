import React, { useContext, useState } from "react";
import "../styles/List.css";
import ListButtons from "./ListButtons";
import { TaskContext } from "../context"

function List({ list }) {
  // STATE
  const [hover, setHover] = useState(false);

  // CONTEXT
  const { setSelectedList } = useContext(TaskContext)

  return (
    <div
      className="List"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="name" onClick={() => setSelectedList(list.id)}>{list.name}</div>
      <div className="buttons">
        {hover && 
          <ListButtons list={list}/>
        }
      </div>
    </div>
  );
}

export default List;
