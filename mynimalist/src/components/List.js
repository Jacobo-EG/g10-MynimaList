import React, { useState }from "react";
import "../styles/List.css";
import RenameList from "./RenameList";
import DeleteList from "./DeleteList"

function List({ list }) {

  const [hover, setHover] = useState(false)


  return (
    <div className="List" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="name">{list.name}</div>
      <div className="buttons">
        {
          hover 
          && <div>
            <DeleteList/> <RenameList/>
          </div>
        }
      </div>
    </div>
  );
}

export default List;
