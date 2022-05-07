import React, {useState} from 'react'
import "../styles/EditTask.css";
import ListForm from './ListForm'
function EditTask({children}){
    const [text, setText] = useState()
    const lists = [
        { id : 1, name : "personal", numofTasks : 0},
        { id : 2, name : "work", numofTasks : 1},
        { id : 3, name : "other", numofTasks : 2}
    ]
    function handleSubmit(e){

    }
    return (
        <div className='EditTask'>
            <div className = "header">
                Edit task
            </div>
            <div className = "container">
                <TaskForm 
                    handleSubmit = {handleSubmit}
                    text = {text}
                    setText = {setText}
                    lists = {lists}
                    />
            </div>
        </div>
    )
}

export default EditTask