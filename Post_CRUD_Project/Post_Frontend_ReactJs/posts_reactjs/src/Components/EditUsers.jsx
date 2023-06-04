import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PutUsersData, ViewUsersData } from "../Redux/Action/UserAction";
import swal from "sweetalert";

export default function EditUsers() {
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
          email: "",
          mobile: "",
          address: "",
          pincode: "",
        });
      })
      .then(() => {
        navigate(`/getuser`);
      });
    setShow(false);
    swal("Poof! You are user updated In !", {
      icon: "success",
    });
  }

  function CancelForm() {
    setShow(false);
    navigate(`/getuser`);
    setuserdata({
      name: "",
      email: "",
      mobile: "",
      address: "",
      pincode: "",
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
                placeholder="Post Title"
                onChange={ChangeFormValue}
                value={userdata?.name}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fontcolor">
                {" "}
                <b>email</b>{" "}
              </label>
              <textarea
                type="text"
                className="form-control"
                name="email"
                rows="3"
                value={userdata?.email}
                placeholder=" Email "
                onChange={ChangeFormValue}
              ></textarea>
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
            <div className="mb-3">
              <label className="form-label fontcolor">
                {" "}
                <b>address</b>{" "}
              </label>
              <textarea
                type="text"
                className="form-control"
                name="address"
                rows="3"
                value={userdata?.address}
                placeholder=" Address "
                onChange={ChangeFormValue}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label fontcolor">
                {" "}
                <b>pincode</b>{" "}
              </label>
              <textarea
                type="text"
                className="form-control"
                name="pincode"
                rows="3"
                value={userdata?.pincode}
                placeholder=" Pincode "
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
  );
}
