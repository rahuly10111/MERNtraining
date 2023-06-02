import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getPostsIdData } from "../Redux/Action/PostAction";
import Loader from './Loader';

export default function ViewPosts() {

    const state = useSelector((state) => state.getIddata.PostsData);
    const dispatch = useDispatch();
    const params = useParams()
    useEffect(() => {
        dispatch(getPostsIdData(params))
    }, []);

    return (
        <>
            {state?.loading ? (
                <Loader></Loader>
            ) : (
                <>
                    <h2 style={{ textAlign: "center" }}> Posts Details </h2>
                    <div className="card p-4">
                        <div class="demo-wrap">
                            <div class="demo-content">
                                {state?.map((data, index) => (
                                    <div key={index}>
                                        <div> <b>  Title :   </b>{data?.title} </div>
                                        <br />
                                        <div> <b>  Description :   </b>{data?.description} </div>
                                        <br />
                                        <div> <b>  Category :   </b>{data?.category} </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </>

            )}

        </>

    );
}
