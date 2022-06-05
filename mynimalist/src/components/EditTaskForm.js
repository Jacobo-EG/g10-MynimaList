import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CheckSquare } from "react-bootstrap-icons";
import { TaskContext } from "../context";
import "../styles/EditTaskForm.css";

function TaskForm() {

  // State
  const [text, setText] = useState('')

  // Context

  const { selectedTask, tokenA, setUpdate, update, checked } = useContext(TaskContext)

  // Cambio el texto segun la lista seleccionada
  useEffect(() => {
    if(selectedTask){
        setText(selectedTask.name)
    }
  }, [selectedTask, checked])

  // Manejo el actualizar nombre de lista con la peticion al backend
  function handleSubmit(e) {
    e.preventDefault()
    axios.post('http://mynimalistbackend.herokuapp.com/task/updatename', {
      token : tokenA,
      id : selectedTask.id,
      name : text
    }).then( response => {
        console.log(response.data)
        setUpdate(!update)
    }).catch( e => {
        console.log(e.response)
    })
  }

  return ( // Devuelvo el componente de editar tarea
    <form className="EditTaskForm" onSubmit={handleSubmit}>
      <div className="edit-container">
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
          <span className="save" onClick={handleSubmit}>
            <CheckSquare color={checked ? "white" : "black"}  size="15"/>
          </span>
      </div>
    </form>
  );
}

export default TaskForm;
