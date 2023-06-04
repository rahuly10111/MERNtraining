import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PutPostsData, getPostsIdData } from "../Redux/Action/PostAction";
import swal from "sweetalert";

export default function EditPosts() {
  const navigate = useNavigate();
  const params = useParams();
  console.log("edit parama ", params);
  const state = useSelector((state) => state.putData.PostsData);
  //const state = useSelector((state) => state);
  console.log("view put data posts ", state);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [postdata, setpostdata] = useState([]);

  useEffect(() => {
    setpostdata(state);
  }, [state]);

  useEffect(() => {
    dispatch(PutPostsData(params));
    setShow(true);
  }, []);

  function ChangeFormValue(e) {
    setpostdata({ ...postdata, [e.target.name]: e.target.value });
  }

  function UpdatePostForm() {
    dispatch(PutPostsData(params, postdata)).then(() => navigate(`/getposts`));
    setShow(false);
    swal("Poof! You are post updated In !", {
      icon: "warning",
    });
    setpostdata({
      title: "",
      description: "",
      category: "",
    });
  }

  function CancelForm() {
    setShow(false);
    navigate(`/getposts`);
    setpostdata({
      title: "",
      description: "",
      category: "",
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
                <b>Title</b>{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                placeholder="Post Title"
                onChange={ChangeFormValue}
                value={postdata?.title}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fontcolor">
                {" "}
                <b>Description</b>{" "}
              </label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={postdata?.description}
                placeholder=" Title Description "
                onChange={ChangeFormValue}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label fontcolor">
                {" "}
                <b>Category</b>{" "}
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="category"
                onChange={ChangeFormValue}
                defaultValue={postdata?.category}
              >
                {/* {options?.map((option)=>{
                                    return <option value={option?.value}>{option?.label}</option>
                                })} */}

                <option value="Fashion and Style">Fashion and Style</option>
                <option value="Food and Beverage">Food and Beverage</option>
                <option value="Health and Wellness">Health and Wellness</option>
                <option value="Career and Business">Career and Business</option>
                <option value="Motivation and Inspiration">
                  Motivation and Inspiration
                </option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-footer justify-content-start">
            <button
              type="button"
              className="btn btn-primary"
              id="savepost"
              onClick={UpdatePostForm}
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
