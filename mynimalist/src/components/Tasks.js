import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import Task from './Task'
import '../styles/Tasks.css';
import { TaskContext } from '../context';
import AddNewTask from './AddNewTask';

function Tasks(){

    const { lists, tasks, setTasks, selectedList, update, tokenA } = useContext(TaskContext)

    const selectedListName = lists.filter(list => list.id === selectedList)

    useEffect( () => {

        axios.post('http://localhost:8080/task/get', {
            token : tokenA,
            id : selectedList
        }).then( response => {
            setTasks(response.data)
        }).catch( e => {
            console.log(e)
        })

    }, [update, selectedList])
    
    return (
        
        <div className = 'Tasks'>
            <div className = 'selected-list'>
                { (selectedList === -1) ?
                    "Selecciona una lista"
                    : 
                    selectedListName[0].name // Revisar si esta solución da fallos
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