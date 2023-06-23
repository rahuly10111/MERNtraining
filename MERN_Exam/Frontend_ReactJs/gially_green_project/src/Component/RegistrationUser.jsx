import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { RegistrationNewUser } from '../Redux/Action/UserAction';
import swal from 'sweetalert';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

export default function RegistrationUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userdata, setuserdata] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    });
    const [formError, setFormError] = useState({});


    function ChangeFormValue(e) {
        setuserdata({ ...userdata, [e.target.name]: e.target.value });
    }

    function SubmitRegistrationForm() {
        const error = validation(userdata);
        setFormError(error);
        if (Object.keys(error).length === 0) {
            dispatch(RegistrationNewUser(userdata));
            swal("Data Added!", "User Registration Success!", "success");
            navigate(`/`);
        }
    };

    const validation = (value, e) => {
        const errors = {};
        const nameRegex = /^[A-Za-z][A-Za-z0-9_]{2,12}/;
        const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!value.name) {
            errors.name = " name Is Required !"
        } else if (!nameRegex.test(value.name)) {
            errors.name = " Invalid Name !"
        }

        if (!value.mobile) {
            errors.mobile = " mobile Number is required !"
        } else if (!mobileRegex.test(value.mobile)) {
            errors.mobile = "Invalid Mobile Number !"
        }

        if (!value.email) {
            errors.email = " Email Id Is Required !"
        } else if (!emailRegex.test(value.email)) {
            errors.email = " Invalid Email Id !"
        }

        if (!value.password) {
            errors.password = " Passeord Is Required !"
        } else if (value.password.length < 4) {
            errors.password = "  Password must be more than 4 characters"
        } else if (value.password.length > 10) {
            errors.password = " Password must be Not more than 10 characters"
        }

        return errors;
    }

    return (
        <>

            {/* <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <div className="d-flex flex-row align-items-center mb-4 ">
                                    <MDBIcon fas icon="user me-3" size='lg' />
                                    <MDBInput label='Your Name' id='form1' type='text' className='w-100' />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <MDBInput label='Your Email' id='form2' type='email' />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg' />
                                    <MDBInput label='Password' id='form3' type='password' />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="key me-3" size='lg' />
                                    <MDBInput label='Repeat your password' id='form4' type='password' />
                                </div>

                                <div className='mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                </div>

                                <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer> */}


            <form className="colorful-form">
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input placeholder="Enter your name" className="form-input" type="text" name='name' value={userdata.name} onChange={ChangeFormValue} required />
                    <p className='errorMessage'>{formError.name}</p>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input placeholder="Enter your email" className="form-input" name="email" type="text" value={userdata.email} onChange={ChangeFormValue} required />
                    <p className='errorMessage'>{formError.email}</p>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input placeholder="Enter your Password" className="form-input" name="password" type="password" value={userdata.password} onChange={ChangeFormValue} required />
                    <p className='errorMessage'>{formError.password}</p>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="mobile">Mobile:</label>
                    <input placeholder="Enter your Mobile" className="form-input" name="mobile" type="text" value={userdata.mobile} onChange={ChangeFormValue} required />
                    <p className='errorMessage'>{formError.mobile}</p>
                </div>
                <button className="form-button" type="button" onClick={SubmitRegistrationForm}  >Submit</button>
            </form>

        </>
    )
}
