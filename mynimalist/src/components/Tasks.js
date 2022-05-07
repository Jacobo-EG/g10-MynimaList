import React from 'react'
import Task from './Task'
import '../styles/Tasks.css';

function Tasks(){

    const selectedList = "ListaInventada"
    const tasks = [
        {
            id : 'id1',
            text : "Tarea1",
            checked : false,
            color : '000000',
            list : 'personal'
        }, 
        {
            id : 'id2',
            text : "Tarea2",
            checked : true,
            color : '00ff00',
            list : 'work'
        }
    ]
    
    return (
        
        <div className = 'Tasks'>
            <div className = 'selected-list'>
                {selectedList}
            </div>
            <div className = 'tasks'>
            {
                tasks.map( task => 
                    <Task task = {task} key = {task.id} />
                    )
            }
            </div>
        </div>
    )
}

export default Tasks