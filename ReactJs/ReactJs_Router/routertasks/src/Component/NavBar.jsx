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
                                <Link to="/" className="nav-link">User</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/photos" className="nav-link">Photos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/comments" className="nav-link">Comments</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
