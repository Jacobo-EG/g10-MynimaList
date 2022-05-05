import React from 'react'
import '../styles/Header.css';
import { XCircleFill } from 'react-bootstrap-icons'

function Header(){

    return (
        <div className='Header'>
            <p>MynimaList</p>
            <span onClick={() => alert("Cerrar sesion")} href="#">
                <XCircleFill color='black' />
            </span>
        </div>
    )
}

export default Header