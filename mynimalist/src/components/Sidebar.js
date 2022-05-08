import React, { useEffect } from 'react'
import '../styles/Sidebar.css';

function Sidebar({children}){
    
    // //CONTEXT
    // const {setSelectedTask} = useContext(TaskContext)
    // //REF
    // const sidebarRef = useRef()
    // useEffect(() => {
    //     document.addEventListener('click', handleClick)
    //     return () => document.removeEventListener('click', handleClick)
    // })

    // const handleClick = e => { //si clicka en la sidebar deselecciona una tarea
    //     if(e.target === sidebarRef.current || sidebarRef.current.contains(e.target)){
    //         setSelectedTask(undefined)
    //     }
    // }

    return (
        <div className='Sidebar'>
            {/* ref = {sidebarRef} */}
            {children}
        </div>
    )
}

export default Sidebar