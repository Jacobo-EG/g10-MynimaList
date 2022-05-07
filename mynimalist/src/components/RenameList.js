import "../styles/RenameList.css";
import React, { useState } from "react";
import Modal from "./Modal";
import ListForm from "./ListForm";
import { Pencil } from "react-bootstrap-icons";

function RenameList() {

    const [showModal, setShowModal] = useState(false);

    function handleSubmit(e) {

    }
    return (
        <div className="edit">
            <span onClick={() => setShowModal(true)}>
                <Pencil size="13" />
            </span>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ListForm handleSubmit={handleSubmit}
                    heading='Editar nombre lista'
                    confirmText='Confirmar' />
            </Modal>
        </div>
    )
}

export default RenameList