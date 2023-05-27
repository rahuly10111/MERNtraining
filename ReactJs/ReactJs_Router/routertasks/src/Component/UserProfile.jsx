import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile() {
    const [state, setstate] = useState([]);
    const [dates, setdate] = useState("hello");
    const getuser = async () => {
        try {
            console.log("first");
            const responseUser = await axios.get(
                `https://jsonplaceholder.typicode.com/users`
            );
            setstate(responseUser);
            console.log("state 1", state);
        } catch (error) {
            console.log(error);
        }
    };

    setTimeout(() => {
        setdate("done");
    }, 20000);

    useEffect(() => {
        console.log("got the Api");
        getuser();
    }, [dates]);

    return (
        <>
            <div className="container p-4">
                <div className="row">
                    {state?.data?.map((data, index) => (
                        <>
                            <div key={index} className="col-sm-6 mb-3 mb-sm-0 pt-4">
                                <div className="card bg-warning bg-opacity-50 border border-secondary border-2 rounded-end">
                                    <div className="card-body ">
                                        <div class="card-header bg-transparent fw-bolder fs-3 text-center">
                                            {" "}
                                            User {index + 1} Details{" "}
                                        </div>
                                        {/* <h5 className="card-title">Special title treatment</h5> */}
                                        <p className="card-text">
                                            <strong> Name : </strong> {data?.name}
                                        </p>
                                        <p className="card-text">
                                            {" "}
                                            <strong> UserName : </strong> {data?.username}
                                        </p>
                                        <p className="card-text">
                                            {" "}
                                            <strong> Email : </strong> {data?.email}
                                        </p>
                                        <span className="card-text">
                                            {" "}
                                            <strong> Address : </strong>
                                            <ul className="">
                                                <li>
                                                    {" "}
                                                    <b> Street: </b> {data?.address.street}
                                                </li>{" "}
                                                <li>
                                                    {" "}
                                                    <b> Suite : </b> {data?.address.suite}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <b> City : </b>
                                                    {data?.address.city}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <b> Zipcode : </b> {data?.address.zipcode}
                                                </li>
                                                <li>
                                                    <b> Geo : </b>
                                                    <ul>
                                                        <li>
                                                            <b> Lat : </b>
                                                            {data?.address.geo.lat}
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <b> Lng : </b>
                                                            {data?.address.geo.lng}
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </span>
                                        <p className="card-text">
                                            {" "}
                                            <strong> Phone : </strong> {data?.phone}
                                        </p>
                                        <p className="card-text">
                                            {" "}
                                            <strong> Website : </strong> {data?.website}
                                        </p>
                                        <span className="card-text">
                                            {" "}
                                            <strong> Company : </strong>
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <b> Name : </b> {data?.company.name}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <b> CatchPhrase : </b> {data?.company.catchPhrase}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <b> Bs : </b> {data?.company.bs}
                                                </li>
                                            </ul>{" "}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
