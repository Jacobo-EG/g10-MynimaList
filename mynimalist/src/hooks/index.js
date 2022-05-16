// import {useState, useEffect, useContext} from "react";
// import axios from "axios";
// import { TaskContext } from "../context";

// export function useTasks() {
//     const [tasks, setTasks] = useState([])

//     const data = []

//     useEffect( () => {
        
//         setTasks(data)

//     }, [])

//     return tasks
// }

// export function useLists() {

//     const [lists, setLists] = useState([])



//     const getLists = async () => {
//         axios.post('http://localhost:8080/list/get', {
//             token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbHZhcm8iLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naW4iLCJleHAiOjE2NTI1MTM2NDJ9.bC6EQzSVWOHBZOog63iRJCdEBzT49SCcITFDwoYbfXU"
//         }).then( response => {
//             console.log(response.data)
//             setLists(response.data)
//         }).catch( e => {
//             console.log(e)
//         })
//     }

//     useEffect( () => {
        
//         getLists()

//         const interval=setInterval(()=>{
//             getLists()
//            },100000)
             
             
//         return()=>clearInterval(interval)

//     }, [])

//     return lists
// }

// export function useTasksFiltered(tasks, selectedList) {
//     const [filteredTasks, setFilteredTasks] = useState([])

//     useEffect(() => {
//         let data;
//         if(selectedList === undefined) {
//             data = tasks
//         } else {
//             data = tasks.filter(task => task.list === selectedList)
//         }
//         setFilteredTasks(data)
//     }, [tasks, selectedList])

//     return filteredTasks
// }