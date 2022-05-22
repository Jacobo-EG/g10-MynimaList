import React, { useContext }  from "react";
import axios from "axios";
import ListForm from "./ListForm";
import { TaskContext } from "../context";

function DeleteList({ list }) {

  const { update, setUpdate, tokenA, setSelectedList } = useContext(TaskContext)

  function handleSubmit(e) {
    e.preventDefault()

    axios.post('http://localhost:8080/list/delete', {
      token : tokenA,
      id : list.id
    }).then( response => {
        setSelectedList(-1)
        setUpdate(!update)
    }).catch( e => {
        console.log(e.response)
    })
  }

  return (
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