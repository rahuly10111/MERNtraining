import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetUsersData, DeleteUsersData } from "../Redux/Action/UserAction";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Loader from './Loader';
import CheckPermission from '../Permission/CheckPermission'
import Permission from '../Permission/Permission'

export default function ViewAllUser() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const state = useSelector((state) => state.getUserDetails);

    function DeleteUsers(data) {
        var PostId = data.id;
        dispatch(DeleteUsersData(PostId));
        swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
        });
    }
    useEffect(() => {
        dispatch(GetUsersData());
    }, [])

    return (
        <>
            {state?.loading ? (
                <Loader></Loader>
            ) : (
                <div className="cards">
                    <div class="demotable">
                        <div class="demo-content">

                            <table className=" table center  border-dark  caption-top table-hover table-borderless">
                                <caption>List of Users</caption>
                                <thead className="center">
                                    <tr>
                                        <th scope="col" > Sr.no </th>
                                        <th scope="col"> Name</th>
                                        <th scope="col"> Email</th>
                                        <th scope="col"> Action </th>
                                    </tr>
                                </thead>

                                <tbody className=" center table-group-divider">
                                    {state?.usersData?.map((data, index) => (
                                        <tr key={index} >
                                            <th scope="row"> {index + 1}</th>
                                            <td >{data?.name} </td>
                                            <td >{data?.email} </td>
                                            <td >
                                                {CheckPermission(Permission.DELETE_USER_PERMISSION) ? <RemoveCircleIcon
                                                    onClick={() => {
                                                        DeleteUsers(data);
                                                    }}
                                                ></RemoveCircleIcon> : ``}
                                                {CheckPermission(Permission.EDIT_USER_PERMISSION) ? <EditIcon onClick={() => navigate(`/putuser/${data.id}`)
                                                } ></EditIcon> : ``}{" "}
                                                {
                                                    <VisibilityIcon
                                                        onClick={() => navigate(`/viewuser/${data.id}`)
                                                        }
                                                    ></VisibilityIcon>
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
