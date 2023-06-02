import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { ViewUsersData } from "../Redux/Action/UserAction";
import Loader from './Loader';

export default function ViewUser() {

    const state = useSelector((state) => state.viewUser);

    const dispatch = useDispatch();
    const params = useParams()
    console.log("params::>", params)
    useEffect(() => {
        dispatch(ViewUsersData(params.id))
    }, []);

    return (
        <>
            {state?.loading ? (
                <Loader></Loader>
            ) : (
                <>
                    <h2 style={{ textAlign: "center" }}>User Profile Card</h2>
                    <div className="card p-4">
                        <div class="demo-wrap">
                            <div class="demo-content">
                                {state?.usersData?.map((data, index) => (
                                    <div key={index}>
                                        <div> <b>  Name :   </b>{data.name} </div>
                                        <br />
                                        <div> <b>  Email :   </b>{data.email} </div>
                                        <br />
                                        <div> <b>  Mobile :   </b>{data.mobile} </div>
                                        <br />
                                        <div> <b>  Address :   </b>{data.address} </div>
                                        <br />
                                        <div> <b>  PinCode :   </b>{data.pincode} </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>

            )}

        </>
    )
}
