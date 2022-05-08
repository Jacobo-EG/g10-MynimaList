import React, {useState} from 'react'
import "../styles/EditTask.css";
import "../styles/TaskForm.css";
import TaskForm from './TaskForm'
function EditTask({children}){
    // const [text, setText] = useState()
    // const lists = [
    //     { id: 1, name: "metodos" },
    //     { id: 2, name: "compleja" },
    //     { id: 3, name: "curvas" }
    //   ]
        //CONTEXT
        const { selectedList } = useContext(TaskContext);  
        //STATE
      const [text, setText] = useState();
      const {taskList, setTaskList} = useState(selectedList);
    function handleSubmit(e){

    }
    return (
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
    )
}

export default EditTask