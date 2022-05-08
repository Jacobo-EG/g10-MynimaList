import React, { useContext } from "react";
import "../styles/Lists.css";
import AddNewList from "./AddNewList";
import { TaskContext } from '../context';
import List from "./List";

function Lists() {
  
  const { lists, setSelectedList } = useContext(TaskContext)

  return (
    <div className="Lists">
      <div className="header">
        <div className="title" onClick={() => setSelectedList(undefined)}>
          <p>Listas</p>
        </div>
        <div className="buttons">
          <AddNewList />
        </div>
      </div>

      <div className="items">
        {
          lists.map( list => 
            <List list={list} key={list.id}/>  
          )
        }
      </div>
    </div>
  );
}

export default Lists;
