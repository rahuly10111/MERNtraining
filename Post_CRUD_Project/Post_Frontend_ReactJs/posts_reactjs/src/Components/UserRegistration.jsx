import React from 'react'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { RegistrationUser } from '../Redux/Action/UserAction';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

export default function UserRegistration() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userdata, setuserdata] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        address: "",
        pincode: "",
    })

    function ChangeFormValue(e) {
        setuserdata({ ...userdata, [e.target.name]: e.target.value });
    }

    function SubmitRegistrationForm() {
        dispatch(RegistrationUser(userdata));
        swal("Data Added!", "User Registration Success!", "success");
        navigate(`/`)

    }


    return (
        <>
            <form className="colorful-form">
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input placeholder="Enter your name" className="form-input" type="text" name='name' value={userdata.name} onChange={ChangeFormValue} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input placeholder="Enter your email" className="form-input" name="email" type="text" value={userdata.email} onChange={ChangeFormValue} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Password:</label>
                    <input placeholder="Enter your Password" className="form-input" name="password" type="password" value={userdata.password} onChange={ChangeFormValue} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Mobile:</label>
                    <input placeholder="Enter your Mobile" className="form-input" name="mobile" type="text" value={userdata.mobile} onChange={ChangeFormValue} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Address:</label>
                    <input placeholder="Enter your Address" className="form-input" name="address" type="text" value={userdata.address} onChange={ChangeFormValue} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">PINCode:</label>
                    <input placeholder="Enter your PinCode" className="form-input" name="pincode" type="text" value={userdata.pincode} onChange={ChangeFormValue} />
                </div>
                <button className="form-button" type="button" onClick={SubmitRegistrationForm} >Submit</button>
            </form>
        </>
    )
}
