import React, { useState } from "react";
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from "react-bootstrap-icons";
import "../styles/Task.css";

function Task({task}) {
    const [hover, setHover] = useState(false)

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
