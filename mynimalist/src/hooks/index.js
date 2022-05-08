import {useState, useEffect} from "react";

export function useTasks() {
    const [tasks, setTasks] = useState([])

    const data = [
        {
            id : 'id1',
            text : "TareaContext1",
            checked : false,
            color : '000000',
            list : 'metodosContext'
        }, 
        {
            id : 'id2',
            text : "TareaContext2",
            checked : true,
            color : '00ff00',
            list : 'complejaContext'
        }
    ]

    useEffect( () => {
        
        setTasks(data)

    }, [])

    return tasks
}

export function useLists() {

    const [lists, setLists] = useState([])

    const dataLists = [
        { id: 1, name: "metodosContext" },
        { id: 2, name: "complejaContext" },
        { id: 3, name: "curvasContext" }
    ]

    useEffect( () => {
        
        setLists(dataLists)

    }, [])

    return lists
}

export function useTasksFiltered(tasks, selectedList) {
    const [filteredTasks, setFilteredTasks] = useState([])

    useEffect(() => {
        let data;
        if(selectedList === undefined) {
            data = tasks
        } else {
            data = tasks.filter(task => task.list === selectedList)
        }
        setFilteredTasks(data)
    }, [tasks, selectedList])

    return filteredTasks
}