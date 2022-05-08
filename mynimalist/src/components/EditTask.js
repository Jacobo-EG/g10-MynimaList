import React, {useEffect, useState, useContext } from 'react'
import "../styles/EditTask.css";
import "../styles/TaskForm.css";
import TaskForm from './TaskForm'
import { TaskContext } from '../context';

function EditTask({children}){
    // const [text, setText] = useState()

        //CONTEXT
    const { lists } = useContext(TaskContext);  
        //STATE
    const [text, setText] = useState('');
    const {taskList, setTaskList} = useState('');
    
    function handleSubmit(e){

    }

    // useEffect(() => {
    //     if (selectedTask) {
    //         setText(selectedTask.text)
    //         setTaskList(selectedTask.listName)
    //     }
    // }, [selectedTask])

    return (
        <div>{
            true &&
            <div className='EditTask'>
                <div className = "header">
                    Edit Task
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
        }
        </div>
    )
}

export default EditTask