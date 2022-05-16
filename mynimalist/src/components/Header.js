import React, { useContext } from "react";
import "../styles/Header.css";
import { EmojiWink } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context";

function Header() {
  const { setSelectedList } = useContext(TaskContext);

  let navigate = useNavigate();
  const handleClickLogOut = () => {
    setSelectedList(-1);
    navigate("/");
  };
  return (
    <div className="Header">
      <p>MynimaList</p>
      <span onClick={handleClickLogOut}>
        <EmojiWink color="black" />
      </span>
    </div>
  );
}

export default Header;
