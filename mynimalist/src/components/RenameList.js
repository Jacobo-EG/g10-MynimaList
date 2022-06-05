import React, { useContext, useState } from "react";
import ListForm from "./ListForm";
import { TaskContext } from "../context";

import axios from "axios";


function RenameList({ list, setShowModal }) {

    // Traigo del contexto todo lo que necesito
    const { selectedList, setSelectedList, tokenA, setUpdate, update} = useContext(TaskContext)

    // State necesario para actualizar el nombre de la tarea
    const [newListName, setNewListName] = useState(list.name)

    // Manejo la petición de cambio de nombre de la lista
    function handleSubmit(e) {
        e.preventDefault()

        axios.post('http://mynimalistbackend.herokuapp.com/list/updatename', {
            token : tokenA,
            id : selectedList,
            name : newListName
          }).then( response => {
              setNewListName("")
              setShowModal(false)
              setUpdate(!update)
          }).catch( e => {
              console.log(e.response)
          })
        
    }

    return ( // Devuelvo el formulario de lista (Que es compartido con añadir lista) con los datos necesarios, por ej, esta vez el campo de texto
            // tiene que tener el nombre actual de la lista
        <div className="edit" onClick={ () => setSelectedList(list.id)}>
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