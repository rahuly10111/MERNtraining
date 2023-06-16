import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

export default function Protected(props) {
    const { Component } = props;

    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem("loginToken");
        if (!login && login === undefined) {
            //  swal("Data Added!", " You Have Not At Login In !", "warning");
            navigate(`/`);
        }
    }, []);

    return (
        <div>
            <Component />
        </div>
    )
}
