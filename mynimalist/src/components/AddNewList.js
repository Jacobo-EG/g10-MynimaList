import React, { useState } from "react";
import Modal from "./Modal";
import ListForm from "./ListForm";
import { PlusSquare } from "react-bootstrap-icons";

function AddNewList() {
  const [showModal, setShowModal] = useState(false);

  function handleSubmit (e) {

  }

  return (
    <div className="AddNewList">
      <div className="add-button">
        <span onClick={() => setShowModal(true)}>
          <PlusSquare size="18" />
        </span>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ListForm handleSubmit={handleSubmit} heading='Añadir nueva lista' confirmText='Confirmar'/>
        </Modal>
      </div>
    </div>
  );
}

export default AddNewList;
