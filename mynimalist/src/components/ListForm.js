import React from 'react'
import "../styles/ListForm.css";

function ListForm({handleSubmit, heading, confirmText}){

    return (
        <form className='ListForm' onSubmit={handleSubmit}>
            <h3>{heading}</h3>
            <input
            type="text"
            autoFocus
            />
            <button className='confirm'>
               {confirmText}
            </button>
        </form>
    )
}

export default ListForm