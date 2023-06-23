import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LoginUserData } from '../Redux/Action/UserAction';
import swal from 'sweetalert';
import '../../src/LoginPage.css';

export default function LoginUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state?.userLogin?.usersData?.status);


    const [userlogindata, setuserlogindata] = useState({
        email: "",
        password: "",
    });
    const [formError, setFormError] = useState({});

    // if (state === 200) {
    //     navigate(`/dasboard`);
    // }

    useEffect(() => {
        let login = localStorage.getItem('loginToken')
        if (login) {
            navigate(`/dasboard`)
            swal("Poof! You are Currently Logined In !", {
                icon: "warning",
            });
        }
    }, [])

    function ChangeFormValue(e) {
        setuserlogindata({ ...userlogindata, [e.target.name]: e.target.value });
    }


    function SubmitLoginForm() {

        const errors = valdation(userlogindata);
        setFormError(errors);
        if (Object.keys(errors).length === 0) {
            console.log("first")
            dispatch(LoginUserData(userlogindata, navigate));

        }


    };

    const valdation = (value, e) => {
        const error = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!value.email) {
            error.email = "Email is Required !"
        } else if (!emailRegex.test(value.email)) {
            error.email = " Invalid Email Found !"
        }

        if (!value.password) {
            error.password = " Password is Required !"
        } else if (value.password.length < 4) {
            error.password = " Password must be more than 4 characters"
        } else if (value.password.length > 10) {
            error.password = " Password must be Not more than 10 characters"
        }

        return error;

    }

    return (
        <>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" placeholder=" Email " name='email' value={userlogindata.email} onChange={ChangeFormValue} />
                                <p className='errorMessage' >{formError.email}</p>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password" name='password' value={userlogindata.password} onChange={ChangeFormValue} />
                                <p className='errorMessage'>{formError.password}</p>
                            </div>
                            <button type='button' className="button login__submit" onClick={SubmitLoginForm}>
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            <button className="button login__submit" onClick={() => navigate("/registration")} >
                                <span className="button__text">Registration  In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>

                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>

            {/* <form className="form">
                <h3 id="heading">Login</h3>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                    </svg>
                    <input autoComplete="off" placeholder=" Email " className="input-field" type="text" name='email' value={userlogindata.email} onChange={ChangeFormValue} required />

                </div>
                <p className='errorMessage' >{formError.email}</p>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <input placeholder="Password" className="input-field" type="password" name='password' value={userlogindata.password} onChange={ChangeFormValue} required />
                </div>
                <p className='errorMessage'>{formError.password}</p>
                <div className="btn">
                    <button type='button' className="button1" onClick={SubmitLoginForm}  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <button className="button2" onClick={() => navigate("/registration")} >Sign Up</button>
                </div>

            </form> */}


        </>
    )
}
