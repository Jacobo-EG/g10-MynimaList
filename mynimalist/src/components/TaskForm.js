import React from "react";
import "../styles/TaskForm.css";
import { TaskContext } from "../context";
import { Palette } from "react-bootstrap-icons";

function TaskForm({
    handleSubmit,
    heading = false,
    text, setText,
    lists,
    showButtons = false,
    setShowModal = false
}) {

  function handleSubmit(e) {

  }

  useEffect( () => {
    setTaskList(selectedList)
  }, [selectedList])

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
        <div className="text">
                {
                    heading &&
                    <h3>{heading}</h3>
                }
                <input
                type="text"
                autoFocus/>
                <button className='confirm'>
                    {confirmText}
                </button>
        </div>
    </form>
  );
}

export default TaskForm;