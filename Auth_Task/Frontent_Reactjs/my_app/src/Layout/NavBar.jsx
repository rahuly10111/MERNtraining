import React from 'react'
import '../../src/NavBar.css'
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    return (
        <>

            <div className="header">
                <ul className="navigation">
                    <li> <NavLink to="/">Login</NavLink>  </li>
                    <li> <NavLink to="/modal">MODAL</NavLink> </li>
                    <li> <NavLink to="/view">View</NavLink> </li>
                    <li> <NavLink to="/delete"> Delete</NavLink></li>
                </ul>
            </div>


        </>
    )
}
