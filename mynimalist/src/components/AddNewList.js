import React, { useContext, useState } from "react";
import Modal from "./Modal";
import ListForm from "./ListForm";
import { PlusSquare } from "react-bootstrap-icons";
import { TaskContext } from "../context";

function AddNewList() {
  const [showModal, setShowModal] = useState(false);
  const [listName, setListName] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <div className="AddNewList">
      <div className="add-button">
        <span onClick={() => setShowModal(true)}>
          <PlusSquare size="18" />
        </span>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ListForm 
            handleSubmit={handleSubmit} 
            heading='Añadir nueva lista' 
            value = {listName}
            setValue = {setListName}
            confirmText='Confirmar'/>
        </Modal>
      </div>
    </div>
  );
}

export default AddNewList;
