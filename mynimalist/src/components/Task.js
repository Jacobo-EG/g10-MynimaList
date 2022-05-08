import React, { useContext, useState, useEffect} from "react";
import {CheckCircleFill, Circle, Trash } from "react-bootstrap-icons";
import { TaskContext } from "../context";
import "../styles/Task.css";
import EditTaskForm from "./EditTaskForm"

function Task({task}) {
    
    //STATE
    const [hover, setHover] = useState(false)
    const [text, setText] = useState("");

    //CONTEXT
    const {selectedTask, setSelectedTask} = useContext(TaskContext) 
    
    // const handleDelete = todo => {
    //     deleteTask(task)

    //     if(selectedTask === task){
    //         setSelectedTask(undefined)
    //     }
    // }

    function handleSubmit(e) {}

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
                <div className="check-task">
                    {
                        task.checked ?
                        <span className="checked">
                            <CheckCircleFill color="#CCCCCC" />
                        </span>
                        :
                        <span className="unchecked">
                            <Circle color={task.color} />
                        </span>
                    }
                </div>

                {
                    (selectedTask===task) ?
                        <EditTaskForm 
                            />
                    :
                    <>
                        <div className="text" onClick = {() => setSelectedTask(task)} >
                            <p style={{color : task.checked ? "#CCCCCC" : "#000000"}}>{task.text}</p>
                            <div className={`line ${task.checked ? "line-through" : ""}`}></div>
                        </div>

                        <div className="delete-task">
                            {/* onClick = {() => handleDelete(task)} */}
                            {
                                (hover || task.checked) &&
                                <span>
                                    <Trash />
                                </span>
                            }
                        </div>
                    </>
                }   
                
            </div>
        </div>
    );
}

export default Task;
