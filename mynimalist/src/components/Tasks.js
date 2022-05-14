import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import Task from './Task'
import '../styles/Tasks.css';
import { TaskContext } from '../context';
import AddNewTask from './AddNewTask';

function Tasks(){

    const { lists, tasks, setTasks, tasksFiltered, setTasksFiltered, selectedList, update, tokenA } = useContext(TaskContext)

    useEffect( () => {
        
        // const selectedListId = lists.filter(list => list.name === selectedList)
        // console.log(selectedListId[0].id)

        axios.post('http://localhost:8080/task/get', {
            token : tokenA,
            id : "2"
        }).then( response => {
            console.log(response.data)
            setTasks(response.data)
        }).catch( e => {
            console.log(e)
        })

        // if(selectedList === undefined) {
        //     setTasksFiltered(tasks)
        // } else {
        //     const selectedListId = lists.filter(list => list.name === selectedList)
        //     console.log(selectedListId)
        //     console.log(tasks.filter(task => task.list_id === selectedListId.id))
        //     setTasksFiltered(tasks)
        // }
        // setTasks(tasksFiltered)



    }, [update, selectedList])
    
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