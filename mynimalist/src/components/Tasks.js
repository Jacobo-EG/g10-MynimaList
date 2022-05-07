import React from 'react'
import Task from './Task'
import tareaInventada from './tareaInventada'
import '../styles/Tasks.css';
function Tasks(){
    const selectedProject = "tareaInventada"
    const tasks = [
        {
            id : 'id1',
            text : "Tarea1",
            checked : false,
            color : '000000',
            List : 'personal'
        }, 
        {
            id : 'id2',
            text : "Tarea2",
            checked : true,
            color : '00ff00',
            List : 'work'
        }
    ]
    
    return (
        
        <div className = 'Tasks'>
            <div className = 'selected-project'>
                {selectedProject}
            </div>
            <div className = 'tasks'>
            {
                selectedProject === 'tareaInventada' ?
                <tareaInventada tasks = {tasks} />
                :
                tasks.map( task => 
                    <Task task = {task} key = {task.id} />
                    )
            }
            </div>
        </div>
    )
}

export default Tasks