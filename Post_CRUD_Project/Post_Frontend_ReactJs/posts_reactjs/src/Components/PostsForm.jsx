import React from 'react'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { AddPostData } from '../Redux/Action/PostAction';
import swal from 'sweetalert';

export default function PostsForm() {
    const dispatch = useDispatch();
    const [postdata, setpostdata] = useState({
        title: "",
        description: "",
        category: ""
    })

    function ChangeFormValue(e) {
        setpostdata({ ...postdata, [e.target.name]: e.target.value });
    }

    function SubmitPostForm() {
        dispatch(AddPostData(postdata));
        swal("Data Added!", "Post Data Added Success!", "success");
        setpostdata({
            title: "",
            description: "",
            category: ""
        })
    }

    console.log("Post Data ", postdata)

    return (
        <>
            <div className="d-grid gap-2 p-4 col-6 mx-auto">
                <button type="button" className="btn btn-warning " data-bs-toggle="modal"
                    data-bs-target="#postModal">
                    <label htmlFor="">Add Post</label>
                </button>
            </div>


            <div className="modal fade bg-secondary " id="postModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" >
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Post Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="row g-2 p-2" id="partform">
                            <div className="mb-3">
                                <label className="form-label fontcolor"> <b>Title</b> </label>
                                <input type="text" className="form-control" name="title" id="title"
                                    placeholder="Post Title" value={postdata.title} onChange={ChangeFormValue} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fontcolor"> <b>Description</b> </label>
                                <textarea type="text" className="form-control" id="description" name="description" rows="3" value={postdata.description} onChange={ChangeFormValue}
                                    placeholder=" Title Description "  ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fontcolor"> <b>Category</b> </label>
                                <select className="form-select" aria-label="Default select example" name='category' value={postdata.category} onChange={ChangeFormValue}>
                                    {/* <option  value >Select Post Category</option> */}
                                    <option >Fashion and Style</option>
                                    <option >Food and Beverage</option>
                                    <option >Health and Wellness</option>
                                    <option >Career and Business</option>
                                    <option >Motivation and Inspiration</option>
                                </select>
                            </div>
                        </form>

                        <div className="modal-footer justify-content-start">
                            <button type="button" className="btn btn-primary" id="savepost" onClick={SubmitPostForm} data-bs-dismiss="modal">Save</button>
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
