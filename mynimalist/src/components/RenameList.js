import React from "react";
import ListForm from "./ListForm";


function RenameList({ list }) {

    function handleSubmit(e) {

    }
    return (
        <div className="edit">
            <ListForm handleSubmit={handleSubmit}
                heading='Editar nombre lista'
                confirmText='Confirmar' />
        </div>
    )
}

export default RenameList