import React from 'react'

function Task({task}){

    return (
        <div className = 'Todo'>
            {task.text}
        </div>
    )
}

export default Task