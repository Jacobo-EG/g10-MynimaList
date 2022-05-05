import React, { useState } from "react";
import Modal from './Modal'
import { PlusSquare } from "react-bootstrap-icons";

function AddNewList() {
    
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="AddNewList">
            <div className="add-button">
                <span onClick={() => setShowModal(true)}>
                    <PlusSquare size="18"/>
                </span>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    hola
                </Modal>
            </div>
        </div>
    )
}

export default AddNewList