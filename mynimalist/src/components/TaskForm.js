import React from 'react'

function TaskForm({handleSubmit, heading, confirmText}){

    return (
        <form className='TaskForm' onSubmit={handleSubmit}>
            <h3>{heading}</h3>
            <input
            type="text"
            autoFocus/>
            <button className='confirm'>
                {confirmText}
            </button>
        </form>
    )
}

export default TaskForm