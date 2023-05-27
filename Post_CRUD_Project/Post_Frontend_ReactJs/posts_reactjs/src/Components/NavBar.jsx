import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"> <b> Add_Posts </b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/getposts" className="nav-link"> <b> Get_Posts </b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/getpostsid" className="nav-link"> <b> Get_Posts_Id </b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/putposts" className="nav-link"> <b> Get_Posts_Edit </b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/photos" className="nav-link"> <b>  Photos </b></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
