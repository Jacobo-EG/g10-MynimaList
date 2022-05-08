import React, { useState } from "react";
import ListForm from "./ListForm";


function RenameList({ list }) {

    const [newListName, setNewListName] = useState(list.name)

    function handleSubmit(e) {
        e.preventDefault()

        /* Codigo renombrar */
        
    }

    return (
        <div className="edit">
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