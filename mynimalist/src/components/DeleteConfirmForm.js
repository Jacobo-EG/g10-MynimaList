import React from 'react'
import "../styles/DeleteConfirmForm.css";

function DeleteConfirmForm({handleSubmit, heading, confirmText, notConfirmText}){

    return (
        <form className='DeleteConfirmForm' onSubmit={handleSubmit}>
            <h3>{heading}</h3>
            <button className='confirmD'>
               {confirmText}
            </button>
            <button className='notConfirmD'>
               {notConfirmText}
            </button>
        </form>
    )
}

export default DeleteConfirmForm