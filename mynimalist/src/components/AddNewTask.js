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
  const {taskList, setTaskList} = useState(selectedList);

  function handleSubmit(e) {

  }

  useEffect( () => {
    setTaskList(selectedList)
  }, [selectedList])

  return (
    <div className="AddNewTask">
        <div className="btn">
            <button onClick={() => setShowModal(true)}>
                + New Task
            </button>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <TaskForm 
                handleSubmit={handleSubmit}
                heading="Add a new task!"
                text={text}
                // setText={setText}
                // taskList={taskList}
                // setTaskList={setTaskList}
                // showButtons={true}
                // setShowModal={setShowModal}
            />
        </Modal>
    </div>
  );
}

export default AddNewTask;
