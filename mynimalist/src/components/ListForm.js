import React from 'react'
import "../styles/ListForm.css";

function ListForm({handleSubmit, heading, confirmText, deleteButton = false}){

    return (
        <form className='ListForm' onSubmit={handleSubmit}>
            <h3>{heading}</h3>
            <div>
                {
                    !deleteButton &&
                    <input
                    type="text"
                    autoFocus
                    />
                }
            </div>
            <button className={`confirm ${deleteButton ? "deleteButton" : ""}`}>
               {confirmText}
            </button>
        </form>
    )
}

export default ListForm

