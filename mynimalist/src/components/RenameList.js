import React, { useContext, useState } from "react";
import ListForm from "./ListForm";
import { TaskContext } from "../context";

import axios from "axios";


function RenameList({ list }) {

    const [showModal, setShowModal] = useState(false);
    const [newListName, setNewListName] = useState('')

    const { update, setUpdate, tokenA } = useContext(TaskContext)

    function handleSubmit(e) {
        e.preventDefault()

        axios.post('http://localhost:8080/list/rename', {
            token : tokenA,
            id : list.id,
            name : newListName
        }).then( response => {
            setNewListName("")
            setShowModal(false)
            setUpdate(!update)
        }).catch( e => {
            console.log(e.response)
        })
        
    }

    return (
    <div className="RenameList">
      
        <ListForm 
                handleSubmit={handleSubmit}
                heading='Editar nombre lista'
                value = {newListName}
                setValue = {setNewListName}
                confirmText='Confirmar' />
    </div>
    );
}

export default RenameList;