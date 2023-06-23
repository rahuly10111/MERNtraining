import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserDetails } from "../Redux/Action/UserAction";
import axios from "axios";

export default function Form() {
    const initialValues = {
        name: "",
        mobile: "",
        email: "",
        password: "",
        Birthday: "",
        age: "",
        favcolor: "",
        time: "",
        file: null,
        gender: "",
        hobbies: [],
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    // const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useDispatch();

    function onChange(e) {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            const newHobbies = checked
                ? [...formValues.hobbies, value] // Add the value if checked
                : formValues.hobbies.filter((hobby) => hobby !== value); // Remove the value if unchecked
            setFormValues({ ...formValues, hobbies: newHobbies });
        } else if (type === "file") {
            setFormValues({ ...formValues, [name]: e.target.files[0] });
        } else {
            setFormValues({ ...formValues, [name]: value });
        }
        const errors = validate({ ...formValues, [name]: value }); // Validate the updated form values
        setFormErrors(errors);
    }

    const formdata = new FormData();

    function submit(e) {
        const errors = validate(formValues);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            formdata.append("name", formValues.name);
            formdata.append("file", formValues.file);
            formdata.append("age", formValues.age);
            formdata.append("mobile", formValues.mobile);
            formdata.append("email", formValues.email);
            formdata.append("password", formValues.password);
            formdata.append("Birthday", formValues.Birthday);
            formdata.append("favcolor", formValues.favcolor);
            formdata.append("time", formValues.time);
            formdata.append("gender", formValues.gender);
            formValues.hobbies.forEach((hobby, index) => {
                formdata.append(`hobbies[${index}]`, hobby);
            });
            const resp = axios.post(
                "http://localhost:3030/formvalidation/postuserdetail",
                formdata
            );

            //  dispatch(UserDetails(formdata));
        }
    }

    const validate = (values, e) => {
        const errors = {};
        const nameRegex = /^[A-Za-z][A-Za-z0-9_]{2,12}/;
        const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name) {
            errors.name = " name is required!";
        } else if (!nameRegex.test(values.name)) {
            errors.name = " This is not a valid name format!";
        }

        if (!values.mobile) {
            errors.mobile = " mobile is required!";
        } else if (!mobileRegex.test(values.mobile)) {
            errors.mobile = " This is not a valid mobile format!";
        }

        if (!values.email) {
            errors.email = " email is required!";
        } else if (!emailRegex.test(values.email)) {
            errors.email = " This is not a valid email format!";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        if (!values.Birthday) {
            errors.Birthday = " Birthday is required!";
        }

        if (!values.age) {
            errors.age = " age is required!";
        }

        // if (!values.favcolor) {
        //     errors.favcolor = " Color is required!";
        // }

        if (!values.gender) {
            errors.gender = " gender is required!";
        }

        if (values.hobbies.length === 0) {
            errors.hobbies = " hobbies is required!";
        }

        if (!values.time) {
            errors.time = " time is required!";
        }

        if (!values.file) {
            errors.file = " file is required!";
            console.log("first", values.file);
        } else {
            console.log("first", values.file);
            const fileSizeInMB = values.file.size / (1024 * 1024);
            const maxSizeInMB = 10;

            if (fileSizeInMB > maxSizeInMB) {
                errors.file = `File size should not exceed ${maxSizeInMB}MB.`;
            }
        }

        return errors;
    };
    return (
        <>
            <form className="colorful-form row g-3">
                <div className="col-md-6">
                    <label className="form-label">

                        <b> Name </b>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        // autoComplete="off"
                        placeholder="Enter Your Name "
                        name="name"
                        value={formValues.name}
                        onChange={onChange}
                        required
                    />
                    <p>{formErrors.name}</p>
                </div>
                <div className="col-md-6">
                    <label className="form-label">

                        <b> Mobile No</b>
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Your Mobile "
                        name="mobile"
                        value={parseInt(formValues.mobile)}
                        onChange={onChange}
                    />
                    <p>{formErrors.mobile}</p>
                </div>
                <hr />
                <div className="col-md-6">
                    <label className="form-label">

                        <b>Email </b>
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        // autoComplete="off"
                        placeholder="Enter Your Email "
                        name="email"
                        value={formValues.email}
                        onChange={onChange}
                    />
                    <p>{formErrors.email}</p>
                </div>
                <div className="col-md-6">
                    <label className="form-label">

                        <b>Password </b>
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Your Password "
                        name="password"
                        value={formValues.password}
                        onChange={onChange}
                    />
                    <p>{formErrors.password}</p>
                </div>
                <hr />
                <div className="col-md-12">
                    <label className="form-label">

                        <b> BirthDate </b>
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        name="Birthday"
                        value={formValues.Birthday}
                        onChange={onChange}
                    />
                    <p>{formErrors.Birthday}</p>
                </div>
                <hr />
                <div className="col-md-6">
                    <label className="form-label">

                        <b> Age</b>
                    </label>
                    <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="80"
                        step="1"
                        name="age"
                        value={formValues.age}
                        onChange={onChange}
                    />
                    <p>{formErrors.age}</p>

                    <span className="ageShow"> You are {formValues.age} Years Old</span>
                </div>
                <div className="col-md-6">
                    <label className="form-label">

                        <b>Select your favorite color </b>
                    </label>
                    <input
                        type="color"
                        className="form-control form-control-color"
                        name="favcolor"
                        value={formValues.favcolor}
                        onChange={onChange}
                    />
                    <p>{formErrors.favcolor}</p>
                </div>
                <hr />
                <div className="col-md-6">
                    <label className="form-label">

                        <b>Gender </b>
                    </label>
                    <br />
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={onChange}
                    />
                    <label className="form-check-label">&nbsp; Male &nbsp; &nbsp;</label>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={onChange}
                    />
                    <label className="form-check-label">&nbsp; Female</label>
                    <p>{formErrors.gender}</p>
                </div>
                <div className="col-md-6">
                    <label className="form-label">

                        <b>Hobbies </b>
                    </label>
                    <br />
                    <input
                        className="form-check-input p-1"
                        type="checkbox"
                        name="hobbies"
                        value="Reading"
                        onChange={onChange}
                        checked={formValues.hobbies.includes("Reading")}
                    />
                    <label className="form-check-label">&nbsp; Reading &nbsp;</label>
                    <input
                        className="form-check-input p-1"
                        type="checkbox"
                        name="hobbies"
                        value="Sports"
                        onChange={onChange}
                        checked={formValues.hobbies.includes("Sports")}
                    />
                    <label className="form-check-label">&nbsp; Sports &nbsp;</label>
                    <input
                        className="form-check-input p-1"
                        type="checkbox"
                        name="hobbies"
                        value="Dancing"
                        onChange={onChange}
                        checked={formValues.hobbies.includes("Dancing")}
                    />
                    <label className="form-check-label">&nbsp; Dancing</label>
                    <p>{formErrors.hobbies}</p>
                </div>
                <hr />
                <div className="col-md-6">
                    <label className="form-label">

                        <b>Time </b>
                    </label>
                    <input
                        type="time"
                        className="form-control"
                        name="time"
                        value={formValues.time}
                        onChange={onChange}
                    />
                    <p>{formErrors.time}</p>
                </div>
                <div className="col-md-6">
                    <label className="form-label">

                        <b> Select file</b>
                    </label>
                    <input
                        className="form-control"
                        type="file"
                        accept="image/*, video/*, .pdf"
                        name="file"
                        onChange={onChange}
                    />
                    <p>{formErrors.file}</p>
                </div>

                <br />

                <button className="form-button" type="button" onClick={submit}>
                    Submit
                </button>
            </form>
            {/* {JSON.stringify(formValues)} */}
        </>
    );
}
