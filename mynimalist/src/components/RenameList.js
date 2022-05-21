<<<<<<< HEAD
import React, { useContext, useState } from "react";
import ListForm from "./ListForm";
import { TaskContext } from "../context";

import axios from "axios";
=======
import React, { useState, useContext } from "react";
import axios from 'axios';
import ListForm from "./ListForm";
import { TaskContext } from '../context';
>>>>>>> 4d4506dc3564aaa4190d401a786bec372ad06a46


function RenameList({ list, setShowModal }) {

    const { selectedList, setSelectedList, tokenA, setUpdate, update} = useContext(TaskContext)

    const [showModal, setShowModal] = useState(false);
    const [newListName, setNewListName] = useState('')

    const { update, setUpdate, tokenA } = useContext(TaskContext)

    function handleSubmit(e) {
        e.preventDefault()

<<<<<<< HEAD
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
=======
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
>>>>>>> 4d4506dc3564aaa4190d401a786bec372ad06a46
        
    }

    return (
<<<<<<< HEAD
    <div className="RenameList">
      
        <ListForm 
=======
        <div className="edit" onClick={ () => setSelectedList(list.id)}>
            <ListForm 
>>>>>>> 4d4506dc3564aaa4190d401a786bec372ad06a46
                handleSubmit={handleSubmit}
                heading='Editar nombre lista'
                value = {newListName}
                setValue = {setNewListName}
                confirmText='Confirmar' />
    </div>
    );
}

export default RenameList;