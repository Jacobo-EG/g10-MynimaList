import React, {useEffect, useState} from 'react'
import "../styles/EditTask.css";
import "../styles/TaskForm.css";
import TaskForm from './TaskForm'
import firebase from '.../firebase'
function EditTask({children}){
    // const [text, setText] = useState()
    // const lists = [
    //     { id: 1, name: "metodos" },
    //     { id: 2, name: "compleja" },
    //     { id: 3, name: "curvas" }
    //   ]
        //CONTEXT
    const { selectedTask, Lists } = useContext(TaskContext);  
        //STATE
    const [text, setText] = useState('');
    const {taskList, setTaskList} = useState('');
    
    function handleSubmit(e){

    }
    useEffect(() => {
        if (selectedTask) {
            setText(selectedTask.text)
            setTaskList(selectedTask.listName)
        }
    }, [selectedTask])
    useEffect(() => {
        if (selectedTask) {
            firebase
                .firerestore()
                .collection('tasks')
                .doc(selectedTask.id)
                .update({
                    text,
                    listName : taskList
                })
        }
    })

    return (
        <div>{
            selectedTask &&
            <div className='EditTask'>
                <div className = "header">
                    Edit Task
                </div>
                <div className = "container">
                <TaskForm 
                    handleSubmit={handleSubmit}
                    text={text}
                    setText={setText}
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
                
                    {/* <TaskForm 
                        handleSubmit = {handleSubmit}
                        text = {text}
                        setText = {setText}
                        lists = {lists}
                        />  */}
                    
                </div>
            </div>
        }
        </div>
    )
}

export default EditTask