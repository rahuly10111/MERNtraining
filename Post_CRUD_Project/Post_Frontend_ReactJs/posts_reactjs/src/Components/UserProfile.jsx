import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetUsersIdData } from "../Redux/Action/UserAction";
import Loader from './Loader';

export default function UserProfile() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state?.profileDetails);
    const profiledata = state.usersData[0];

    useEffect(() => {
        dispatch(GetUsersIdData());
    }, [])

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
