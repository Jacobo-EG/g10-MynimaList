import React, { useState, useContext } from "react";
import axios from 'axios';
import ListForm from "./ListForm";
import { TaskContext } from '../context';


function RenameList({ list, setShowModal }) {

    const { selectedList, setSelectedList, tokenA, setUpdate, update} = useContext(TaskContext)

    const [newListName, setNewListName] = useState(list.name)

    function handleSubmit(e) {
        e.preventDefault()

        axios.post('http://localhost:8080/list/updatename', {
            token : tokenA,
            id : selectedList,
            name : newListName
          }).then( response => {
              console.log(response.data)
              setNewListName("")
              setShowModal(false)
              setUpdate(!update)
          }).catch( e => {
              console.log(e.response)
          })
        
    }

    return (
        <div className="edit" onClick={ () => setSelectedList(list.id)}>
            <ListForm 
                handleSubmit={handleSubmit}
                heading='Editar nombre lista'
                value = {newListName}
                setValue = {setNewListName}
                confirmText='Confirmar' />
        </div>
    )
}

export default RenameList