import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CheckPermission from '../Permission/CheckPermission'
import Permission from '../Permission/Permission'

export default function NavBar() {
    const navigate = useNavigate()
    function logout() {
        localStorage.removeItem("loginToken");
        localStorage.removeItem("permission");
        navigate(`/`)
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#2edaff" }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul class="snip1143">
                            <li><NavLink to="/" className="nav-link"> <b> LOGIN </b></NavLink></li>
                            <li><NavLink to="/userprofile" className="nav-link"> <b> PROFILE </b></NavLink></li>
                            <li><NavLink to="/addposts" className="nav-link"> <b> ADDPOSTS </b></NavLink></li>
                            <li><NavLink to="/getposts" className="nav-link"> <b> POSTS </b></NavLink></li>
                            <li><NavLink to="/getuser" className="nav-link"> <b> USER </b></NavLink></li>
                            <li><NavLink to="/photos" className="nav-link"> <b>  PHOTOS </b></NavLink></li>
                        </ul>

                    </div>
                    <form className="d-flex">
                        <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                        <ExitToAppIcon className="svg_icons" onClick={() => { logout() }}  ></ExitToAppIcon>

                    </form>
                </div>
            </nav>

        </>
    )
}
