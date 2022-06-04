import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import ListForm from "./ListForm";
import { PlusSquare } from "react-bootstrap-icons";
import { TaskContext } from "../context";

function AddNewList() {
  // State
  const [showModal, setShowModal] = useState(false);
  const [listName, setListName] = useState('');
  // Context
  const { update, setUpdate, tokenA, checked } = useContext(TaskContext)

  function handleSubmit (e) {
    e.preventDefault()

    axios.post('http://mynimalistbackend.herokuapp.com/list/add', {
      token : tokenA,
      name : listName
    }).then( response => {
        setListName("")
        setShowModal(false)
        setUpdate(!update)
    }).catch( e => {
        console.log(e.response)
    })
  }

  useEffect( () => {
    
  }, [checked])

  return (
    <div className="AddNewList">
      <div className="add-button">
        <span onClick={() => setShowModal(true)}>
          <PlusSquare color={checked ? "white" : "black"} size="18" />
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
