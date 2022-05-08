import React, { useEffect, useState, useContext } from "react";
import "../styles/EditTask.css";
import TaskForm from "./TaskForm";
import EditTaskForm from "./EditTaskForm";
import { TaskContext } from "../context";

function EditTask() {
  //CONTEXT
  const { selectedTask } = useContext(TaskContext);

  //STATE
  const [text, setText] = useState("");

  function handleSubmit(e) {}

  useEffect(() => {
    if (selectedTask) {
      setText(selectedTask.text);
    }
  }, [selectedTask]);

  return (
    <div>
      {selectedTask && 
        <div className="EditTask">
          <div className="container">
            <TaskForm 
                        handleSubmit = {handleSubmit}
                        text = {text}
                        setText = {setText}
                        confirmText="confirmar"
                        /> 
            <EditTaskForm />
          </div>
        </div>
      }
    </div>
  );
}

export default EditTask;
