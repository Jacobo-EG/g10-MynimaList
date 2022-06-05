import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import Task from './Task'
import '../styles/Tasks.css';
import { TaskContext } from '../context';
import AddNewTask from './AddNewTask';

function Tasks(){

    // Traigo del contexto todo lo que voy a necesitar
    const { lists, tasks, setTasks, selectedList, update, tokenA } = useContext(TaskContext)

    // Obtengo el nombre de la lista seleccionada
    const selectedListName = lists.filter(list => list.id === selectedList)

    // Hago la peticion al backend para que me devuelva todas las tareas, cada vez que me haga falta o cambie la lista seleccionada
    useEffect( () => {

        axios.post('http://mynimalistbackend.herokuapp.com/task/get', {
            token : tokenA,
            id : selectedList
        }).then( response => {
            setTasks(response.data)
        }).catch( e => {
            console.log(e)
        })

    }, [update, selectedList])
    
    return ( // Devuelvo todos los elementos necesarios en la vista
        
        <div className = 'Tasks'>
            <div className = 'selected-list'>
                { (selectedList === -1) ?
                    "Selecciona una lista"
                    : 
                    selectedListName[0].name 
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