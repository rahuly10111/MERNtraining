import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPostsData, DeletePostsData } from "../Redux/Action/Action";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


export default function GetPost() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const state = useSelector((state) => state.getData);

    function GetPosts() {
        dispatch(GetPostsData());
    }

    function DeletePosts(data) {
        console.log("user Data ", data);
        console.log("user Data id ", data.id);
        var PostId = data.id;
        dispatch(DeletePostsData(PostId));
        swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
        });
    }

    useEffect(() => {
        dispatch(GetPostsData());
    }, [])

    console.log("Get Post state Value ", state);

    return (
        <>
            <div className="d-grid gap-2 p-4 col-6 mx-auto">
                <button
                    type="button"
                    sx={{ m: 8 }}
                    className="btn btn-outline-info"
                    onClick={GetPosts}
                >
                    Get All Posts{" "}
                </button>
            </div>

            {state?.loading ? (
                <div className="loader"></div>
            ) : (
                <table className="table p-4  center table-info table-hover table-bordered">
                    <thead>
                        <tr className="table-secondary">
                            <th> Sr.no </th>
                            <th> Title</th>
                            <th> Action </th>
                        </tr>
                    </thead>

                    <tbody>
                        {state?.PostsData?.map((data, index) => (
                            <tr key={index} className="table-secondary">
                                <td className="table-info"> {index + 1}</td>
                                <td className="table-info">{data?.title} </td>
                                <td className="table-info">
                                    {" "}
                                    {
                                        <RemoveCircleIcon
                                            onClick={() => {
                                                DeletePosts(data);
                                            }}
                                        ></RemoveCircleIcon>
                                    }{" "}
                                    {<EditIcon onClick={() => navigate(`/putposts/${data.id}`)
                                    } ></EditIcon>}{" "}
                                    {
                                        <VisibilityIcon
                                            onClick={() => navigate(`/getpostsid/${data.id}`)
                                            }
                                        ></VisibilityIcon>
                                    }{" "}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
