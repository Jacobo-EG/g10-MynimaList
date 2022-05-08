import React, { useContext, useState } from "react";
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from "react-bootstrap-icons";
import "../styles/Task.css";

function Task({task}) {
    
    //STATE
    const [hover, setHover] = useState(false)
    //CONTEXT
    // const {selectedTask, setSelectedTask} = useContext(TaskContext) 
    // const handleDelete = todo => {
    //     deleteTask(task)

    //     if(selectedTask === task){
    //         setSelectedTask(undefined)
    //     }
    // }
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
                <div className="text">
                    {/* onClick = {() => setSelectedTask(task)} */}
                    <p style={{color : task.checked ? "#CCCCCC" : "#000000"}}>{task.text}</p>
                    <div className={`line ${task.checked ? "line-through" : ""}`}></div>
                </div>
                <div className="re-add">
                    {
                        task.checked && 
                        <span>
                            <ArrowClockwise />
                        </span>
                    }
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
            </div>
        </div>
    );
}

export default Task;
