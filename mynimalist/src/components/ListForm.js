import React from 'react'
import "../styles/ListForm.css";

function ListForm({handleSubmit, heading, value, setValue, confirmText, deleteButton = false}){
    // Uso este componente tanto para añadir nueva lista como para editar nombre de lista
    return (
        <form className='ListForm' onSubmit={handleSubmit}>
            <h3>{heading}</h3>
            <div>
                {
                    !deleteButton &&
                    <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
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

