import React, {useState} from "react";
import "../styles/ListButtons.css";
import { Pencil, Trash } from "react-bootstrap-icons";
import RenameList from "./RenameList";
import DeleteList from "./DeleteList";
import Modal from "./Modal";

function ListButtons({list}) {

  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  return (
    <div className="buttons">
        <span className="edit" onClick={() => setShowModalEdit(true)}>
          <Pencil size="18" />
        </span>
        <span className="delete" onClick={() => setShowModalDelete(true)}>
          <Trash size="18" />
        </span>
        <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>
          <RenameList list={list} setShowModal={setShowModalEdit}/>
        </Modal>
        <Modal showModal={showModalDelete} setShowModal={setShowModalDelete}>
          <DeleteList list={list} setShowModal={setShowModalDelete}/>
        </Modal>
    </div>
  );
}

export default ListButtons;
