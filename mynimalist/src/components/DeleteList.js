import "../styles/DeleteList.css";
import { Trash } from "react-bootstrap-icons";
import React, { useState } from "react";
import Modal from "./Modal";
import ListForm from "./DeleteConfirmForm";

function DeleteList(list) {

        const [showModal, setShowModal] = useState(false);

        function handleSubmit(e) {

        }

        return (
                <div className="delete">
                        <span onClick={() => setShowModal(true)}>
                                <Trash size="15" />
                        </span>
                        
                        <Modal showModal={showModal} setShowModal={setShowModal}>
                                <ListForm handleSubmit={handleSubmit}
                                        heading='Desea eliminar la lista'
                                        confirmText='Confirmar: La lista se eliminara permanentemente' 
                                        notConfirmText = 'Cancelar' />
                        </Modal>
                </div>
        )
}

export default DeleteList