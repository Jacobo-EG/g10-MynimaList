import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CheckCircleFill, Circle, Trash } from "react-bootstrap-icons";
import { TaskContext } from "../context";
import "../styles/Task.css";
import EditTaskForm from "./EditTaskForm";

function Task({ task }) {
  // States necesarios
  const [hover, setHover] = useState(false);
  const [text, setText] = useState("");

  // Traigo del contexto todo lo que necesito
  const { selectedTask, setSelectedTask, tokenA, update, setUpdate } =
    useContext(TaskContext);

  // Manejo el borrar tarea, cuando la llamo hago la petición al backend para que la borre y actualizo todos los componentes necesarios 
  const handleDelete = (task) => {
    axios
      .post("http://mynimalistbackend.herokuapp.com/task/delete", {
        token: tokenA,
        id: task.id,
      })
      .then((response) => {
        setUpdate(!update);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  // Manejo el completar tarea, hago la petición al backend y actualizo todos los componentes necesarios
  const handleCheck = (task) => {
    axios.post('http://mynimalistbackend.herokuapp.com/task/updatestatus', {
      token : tokenA,
      name : task.text,
      id : task.id,
      finished : !task.finished
    }).then( response => {
        setUpdate(!update)
    }).catch( e => {
        console.log(e.response)
    })
  }; 

  // Manejo el editar tarea
  useEffect(() => {
    if (selectedTask) {
      setText(selectedTask.text);
    }
  }, [selectedTask]);

  return ( // Devuelvo todos los elementos que componen una tarea, junto con sus botones
    <div className="Task">
      <div
        className="task-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="check-task" onClick={() => handleCheck(task)}>
          {task.finished ? (
            <span className="checked">
              <CheckCircleFill color="#CCCCCC" />
            </span>
          ) : (
            <span className="unchecked" >
              <Circle color={task.color} />
            </span>
          )}
        </div>

        {selectedTask === task ? (
          <EditTaskForm />
        ) : (
          <>
            <div className="text" onClick={() => setSelectedTask(task)}>
              <p>
                {task.name}
              </p>
              <div
                className={`line ${task.finished ? "line-through" : ""}`}
              ></div>
            </div>

            <div className="delete-task">
              {(hover || task.checked) && (
                <span onClick={() => handleDelete(task)}>
                  <Trash />
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Task;
