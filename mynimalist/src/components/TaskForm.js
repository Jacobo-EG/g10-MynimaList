import React from "react";
import "../styles/TaskForm.css";
import { TaskContext } from "../context";

function TaskForm({
    handleSubmit,
    heading = false,
    text, setText,
    confirmText,
    deleteButton = false,
    setShowModal = false
}) {

  function handleSubmit(e) {

  }

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
                <button className={`confirm ${deleteButton ? "deleteButton" : ""}`}>
                    {confirmText}
                </button>
        </div>
        {/* <div className="pick-project">
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
        </div> */}
    </form>
  );
}

export default TaskForm;
