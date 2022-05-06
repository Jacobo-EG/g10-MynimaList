import React from "react";
import "../styles/ListButtons.css";
import { Pencil, Trash } from "react-bootstrap-icons";

function ListButtons() {
    return (
        <div className="buttons" >
            <span className="edit">
                <Pencil size="18" />
            </span> 
            <span className="delete">
                <Trash />
            </span>
        </div>
    )
}

export default ListButtons