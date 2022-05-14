import React, { useContext, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import ListForm from "./ListForm";
import { PlusSquare } from "react-bootstrap-icons";
import { TaskContext } from "../context";
import { useLists } from "../hooks";

function AddNewList() {
  // State
  const [showModal, setShowModal] = useState(false);
  const [listName, setListName] = useState('')
  // Context
  const { update, setUpdate, tokenA } = useContext(TaskContext)

  function handleSubmit (e) {
    e.preventDefault()

    axios.post('http://localhost:8080/list/add', {
      token : tokenA,
      name : listName
    }).then( response => {
        setUpdate(!update)
        console.log(response.data)
    }).catch( e => {
        console.log(e.response)
    })
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
