import React, { createContext, useState } from 'react'
import { useTasks, useTasksFiltered } from '../hooks'

const TaskContext = createContext()

function TaskContextProvider({ children }) {

    // Estado usado para el token de acceso
    const [tokenA, setTokenA] = useState("")

    // Estado usado para seleccionar una lista o una tarea
    const [selectedList, setSelectedList] = useState(-1)
    const [selectedTask, setSelectedTask] = useState(undefined)

    // Estado usado para actualizar las listas y las tareass
    const [update, setUpdate] = useState(false)

    // Estado usado para obtener las listas, tareas y tareas filtradas por lista
    const [lists, setLists] = useState([])
    const [tasks, setTasks] = useState([])

    return (
        <TaskContext.Provider
        value={
            {
                selectedList,
                setSelectedList,
                tasks,
                setTasks,
                lists,
                setLists,
                selectedTask,
                setSelectedTask,
                update,
                setUpdate,
                tokenA,
                setTokenA
            }
        }>
            {children}
        </TaskContext.Provider>
    )
}

export { TaskContextProvider, TaskContext }