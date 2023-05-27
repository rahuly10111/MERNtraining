import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PutPostsData } from '../Redux/Action/Action';

export default function EditPosts() {
    const params = useParams();
    console.log("edit parama ", params)
    const state = useSelector((state) => state.putData.PostsData.data);
    console.log("view put data posts ", state)
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(PutPostsData(params));
        setShow(true);
    }, [])

    return (
        <>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <Form>
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
                        </Form>



                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close Modal</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}



