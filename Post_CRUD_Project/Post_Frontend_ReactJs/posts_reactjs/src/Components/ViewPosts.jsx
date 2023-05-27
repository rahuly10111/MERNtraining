import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getPostsIdData } from "../Redux/Action/Action";

export default function ViewPosts() {
    const state = useSelector((state) => state.getIddata.PostsData.data);
    console.log("view data posts ", state)

    const dispatch = useDispatch();
    const params = useParams()
    console.log("params::>", params)
    useEffect(() => {
        dispatch(getPostsIdData(params))
    }, []);

    return (
        <table className="table p-4  center table-info table-hover table-bordered">
            <thead>
                <tr className="table-secondary">
                    <th> Title</th>
                    <th> Description </th>
                    <th> Category </th>

                </tr>
            </thead>

            <tbody>
                {state?.map((data, index) => (
                    <tr key={index} className="table-secondary">
                        <td className="table-info">{data?.title} </td>
                        <td className="table-info">{data?.description}</td>
                        <td className="table-info">{data?.category}</td>

                    </tr>
                ))}
            </tbody>


        </table>

    );
}
