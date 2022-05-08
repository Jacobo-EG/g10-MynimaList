import React, {useContext} from 'react'
import Task from './Task'
import '../styles/Tasks.css';
import { TaskContext } from '../context';
import AddNewTask from './AddNewTask';

function Tasks(){

    const { tasks, selectedList } = useContext(TaskContext)
    
    return (
        
        <div className = 'Tasks'>
            <div className = 'selected-list'>
                { (selectedList === undefined) ?
                    "Inicio"
                    : 
                    selectedList
                }
            </div>
            <div className = 'tasks'>
            {
                tasks.map( task => 
                    <Task task = {task} key = {task.id} />
                    )
            }
            </div>
            <div>
               <AddNewTask />
            </div>
        </div>
    )
}

export default Tasks