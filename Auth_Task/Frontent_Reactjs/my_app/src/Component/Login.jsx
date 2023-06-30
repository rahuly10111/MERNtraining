import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    async function UserLogin() {
        //  const res = await axios.get("http://localhost:3030/app/login");
        // console.log("login data", res);
      //  navigate(`http://localhost:3030/app/login`);

    }

    return (
        <>
            <button onClick={UserLogin}> Login Here </button>

        </>
    )
}
