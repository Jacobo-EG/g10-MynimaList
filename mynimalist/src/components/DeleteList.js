import React, { useContext }  from "react";
import axios from "axios";
import ListForm from "./ListForm";
import { TaskContext } from "../context";

function DeleteList({ list }) {

  const { update, setUpdate, tokenA, setSelectedList } = useContext(TaskContext)

  // Mando la peticion al backend de borrar la lista
  function handleSubmit(e) {
    e.preventDefault()

    axios.post('http://mynimalistbackend.herokuapp.com/list/delete', {
      token : tokenA,
      id : list.id
    }).then( response => {
        setSelectedList(-1)
        setUpdate(!update)
    }).catch( e => {
        console.log(e.response)
    })
  }

  return ( // Renderizo la confirmacion de borrar lista
    <div className="delete">
      <ListForm
        handleSubmit={handleSubmit}
        heading="Desea eliminar la lista"
        confirmText="Confirmar"
        deleteButton = {true}
      />
    </div>
  );
}

export default DeleteList;
