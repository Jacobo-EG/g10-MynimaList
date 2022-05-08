import React, { createContext, useState } from 'react'
import { useTasks, useLists, useTasksFiltered } from '../hooks'

const TaskContext = createContext()

function TaskContextProvider({ children }) {

    const [selectedList, setSelectedList] = useState(undefined)

    const tasks = useTasks()
    const lists = useLists()
    const tasksFiltered = useTasksFiltered(tasks, selectedList)

    return (
        <TaskContext.Provider
        value={
            {
                selectedList,
                setSelectedList,
                tasks : tasksFiltered,
                lists
            }
        }>
            {children}
        </TaskContext.Provider>
    )
}

export { TaskContextProvider, TaskContext }