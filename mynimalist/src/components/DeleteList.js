import "../styles/DeleteList.css";
import React from "react";
import ListForm from "./ListForm";

function DeleteList({ list }) {

  function handleSubmit(e) {}

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
