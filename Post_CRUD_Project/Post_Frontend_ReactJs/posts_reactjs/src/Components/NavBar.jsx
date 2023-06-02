import React from 'react'
import { Link, useNavigate } from "react-router-dom"
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
                            <li><Link to="/" className="nav-link"> <b> LOGIN </b></Link></li>
                            <li><Link to="/userprofile" className="nav-link"> <b> PROFILE </b></Link></li>
                            <li><Link to="/addposts" className="nav-link"> <b> ADDPOSTS </b></Link></li>
                            <li><Link to="/getposts" className="nav-link"> <b> POSTS </b></Link></li>
                            <li><Link to="/getuser" className="nav-link"> <b> USER </b></Link></li>
                            <li><Link to="/photos" className="nav-link"> <b>  PHOTOS </b></Link></li>
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
