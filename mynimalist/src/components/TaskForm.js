import React from "react";
import "../styles/TaskForm.css";
import { TaskContext } from "../context";

function TaskForm({
    handleSubmit,
    heading = false,
    text, setText,
    confirmText,
    showButton = false,
    setShowModal = false
}) {

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
        <div className="text">
                {
                    heading &&
                    <h3>{heading}</h3>
                }
                <input
                value={text}
                type="text"
                onChange={e => setText(e.target.value)}
                autoFocus/>
                <button className="confirm">
                    {confirmText}
                </button>
        </div>
    </form>
  );
}

export default TaskForm;
