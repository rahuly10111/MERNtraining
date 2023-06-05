import React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Person3Icon from '@mui/icons-material/Person3';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("loginToken");
        navigate(`/`)
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <div className="hamburger-lines">
                    </div>
                    <img className="logo" src="https://i.imgur.com/gea725J.png" alt="Logo" />
                    <ExitToAppIcon className="svg_icons" onClick={() => { logout() }} ></ExitToAppIcon>
                    <Person3Icon className="user_icons" onClick={() => navigate("/profile")} ></Person3Icon>
                </div>
            </nav>
        </>
    )
}
