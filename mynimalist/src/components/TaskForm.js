import React from "react";
import "../styles/AddNewTask.css";
import TaskForm from "./TaskForm";
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
        <div className="pick-project">
            <div className="title">
                <Palette />
                <p>Elige una lista</p>
            </div>
            <div className="lists">
                {
                    lists.map( list =>
                        <div className="list" key={list.id}>
                            {list.name}
                        </div>
                    )
                }
            </div>
        </div>
    </form>
  );
}

export default TaskForm;