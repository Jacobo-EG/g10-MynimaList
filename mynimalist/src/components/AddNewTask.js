import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import "../styles/AddNewTask.css";
import TaskForm from "./TaskForm";
import { TaskContext } from "../context";

function AddNewTask() {
    //CONTEXT
  const { selectedList } = useContext(TaskContext);  
    
    //STATE
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");

  function handleSubmit(e) {

  }

  return (
    <div className="AddNewTask">
        <div className="btn">
          {
            (selectedList !== undefined) &&
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
                  showButtons={true}
                  setShowModal={setShowModal}
              />
          </Modal>
        }
    </div>
  );
}

export default AddNewTask;
