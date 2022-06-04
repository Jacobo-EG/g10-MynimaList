import React, { useContext, useEffect } from "react";
import axios from 'axios';
import "../styles/Lists.css";
import AddNewList from "./AddNewList";
import { TaskContext } from '../context';
import List from "./List";

function Lists() {
  
  const { lists, setSelectedList, setLists, update, tokenA } = useContext(TaskContext)


useEffect( () => {
    
    axios.post('http://mynimalistbackend.herokuapp.com/list/get', {
      token : tokenA
  }).then( response => {
      setLists(response.data)
  }).catch( e => {
      console.log(e)
  })

}, [update])

  return (
    <div className="Lists">
      <div className="header">
        <div className="title" onClick={() => setSelectedList(-1)}>
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
