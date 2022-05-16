import React, { useContext, useState } from "react";
import axios from 'axios';
import Modal from "./Modal";
import "../styles/AddNewTask.css";
import TaskForm from "./TaskForm";
import { TaskContext } from "../context";

function AddNewTask() {
    //CONTEXT
  const { selectedList, tokenA, update, setUpdate } = useContext(TaskContext);  
    
    //STATE
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");

  function handleSubmit(e) {
      e.preventDefault()

      axios.post('http://localhost:8080/task/add', {
        token : tokenA,
        name : text,
        id : selectedList
      }).then( response => {
          setText("")
          setShowModal(false)
          setUpdate(!update)
      }).catch( e => {
          console.log(e.response)
      })
  }

  return (
    <div className="AddNewTask">
        <div className="btn">
          {
            (selectedList !== -1) &&
            <button onClick={() => setShowModal(true)}>
                Añadir tarea
            </button>
          }
        </div>
        {
          <Modal showModal={showModal} setShowModal={setShowModal}>
              <TaskForm 
                  handleSubmit={handleSubmit}
                  heading="Añadir nueva tarea"
                  text={text}
                  setText={setText}
                  confirmText="Confirmar"
              />
          </Modal>
        }
    </div>
  );
}

export default AddNewTask;
