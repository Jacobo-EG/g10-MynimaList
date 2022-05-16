import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CheckCircleFill, Circle, Trash } from "react-bootstrap-icons";
import { TaskContext } from "../context";
import "../styles/Task.css";
import EditTaskForm from "./EditTaskForm";

function Task({ task }) {
  //STATE
  const [hover, setHover] = useState(false);
  const [text, setText] = useState("");

  //CONTEXT
  const { selectedTask, setSelectedTask, tokenA, update, setUpdate } =
    useContext(TaskContext);

  const handleDelete = (task) => {
    axios
      .post("http://localhost:8080/task/delete", {
        token: tokenA,
        id: task.id,
      })
      .then((response) => {
        setUpdate(!update);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const handleCheck = (task) => {
    axios.post('http://localhost:8080/task/updatestatus', {
      token : tokenA,
      name : task.text,
      id : task.id,
      finished : !task.finished
    }).then( response => {
        console.log(response.data)
        setUpdate(!update)
    }).catch( e => {
        console.log(e.response)
    })
  }; 

  useEffect(() => {
    if (selectedTask) {
      setText(selectedTask.text);
    }
  }, [selectedTask]);

  return (
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
              <p style={{ color: task.finished ? "#CCCCCC" : "#000000" }}>
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
