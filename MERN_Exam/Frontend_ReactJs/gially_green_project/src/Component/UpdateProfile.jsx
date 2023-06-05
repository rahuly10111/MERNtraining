import React, { useEffect, useState } from 'react';
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { ViewUsersData, PutUsersData } from '../Redux/Action/UserAction';

export default function UpdateProfile() {

    const navigate = useNavigate();
    const params = useParams();
    console.log("edit User parama ", params);
    const state = useSelector((state) => state?.viewUser?.usersData[0]);

    console.log("view put data posts ", state);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [userdata, setuserdata] = useState([]);

    useEffect(() => {
        setuserdata(state);
    }, [state]);

    console.log("User  data while update ", userdata);

    useEffect(() => {
        dispatch(ViewUsersData(params.id));
        setShow(true);
    }, []);

    function ChangeFormValue(e) {
        setuserdata({ ...userdata, [e.target.name]: e.target.value });
    }

    function UpdateUserForm() {
        dispatch(PutUsersData(params, userdata))
            .then(() => {
                setuserdata({
                    name: "",
                    mobile: "",
                });
            })
            .then(() => {
                navigate(`/profile`);
            });
        setShow(false);
        swal("Poof! You are user updated In !", {
            icon: "success",
        });
    }

    function CancelForm() {
        setShow(false);
        navigate(`/profile`);
        setuserdata({
            name: "",
            mobile: "",
        });
    }

    return (
        <>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label className="form-label fontcolor">
                                {" "}
                                <b>name</b>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                onChange={ChangeFormValue}
                                value={userdata?.name}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fontcolor">
                                {" "}
                                <b>mobile</b>{" "}
                            </label>
                            <textarea
                                type="text"
                                className="form-control"
                                name="mobile"
                                rows="3"
                                value={userdata?.mobile}
                                placeholder=" Mobile "
                                onChange={ChangeFormValue}
                            ></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-footer justify-content-start">
                        <button
                            type="button"
                            className="btn btn-primary"
                            id="savepost"
                            onClick={UpdateUserForm}
                            data-bs-dismiss="modal"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn btn-light"
                            data-bs-dismiss="modal"
                            onClick={CancelForm}
                        >
                            Cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>

        </>
    )
}
