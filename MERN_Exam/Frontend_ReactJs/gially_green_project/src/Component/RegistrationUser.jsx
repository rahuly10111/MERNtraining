import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { RegistrationNewUser } from '../Redux/Action/UserAction';
import swal from 'sweetalert';

export default function RegistrationUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userdata, setuserdata] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    })


    function ChangeFormValue(e) {
        setuserdata({ ...userdata, [e.target.name]: e.target.value });
    }

    function SubmitRegistrationForm() {
        dispatch(RegistrationNewUser(userdata));
        swal("Data Added!", "User Registration Success!", "success");
        navigate(`/`)

    }
    return (
        <>
            <form className="colorful-form">
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input placeholder="Enter your name" className="form-input" type="text" name='name' value={userdata.name} onChange={ChangeFormValue} required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input placeholder="Enter your email" className="form-input" name="email" type="text" value={userdata.email} onChange={ChangeFormValue} required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input placeholder="Enter your Password" className="form-input" name="password" type="password" value={userdata.password} onChange={ChangeFormValue} required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="mobile">Mobile:</label>
                    <input placeholder="Enter your Mobile" className="form-input" name="mobile" type="text" value={userdata.mobile} onChange={ChangeFormValue} required />
                </div>
                <button className="form-button" type="button" onClick={SubmitRegistrationForm}  >Submit</button>
            </form>

        </>
    )
}
