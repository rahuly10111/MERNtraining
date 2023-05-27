import React from "react";
import { useSelector } from 'react-redux';
export default function ApiDataTable() {

    const state = useSelector((state) => state.apiData)
    console.log("DataTable State value ", state)
    console.log("DataTable State.apiData value ", state.apiData)
    console.log("DataTable State.userData value ", state.userData)
    console.log("DataTable State.userData value0000 ", state.loading)
    return (
        <>
            {state?.loading ? (<span className="loader"></span>) :
                < div className="container p-4">
                    <div className="row">
                        {state?.getData?.map((data, index) => (
                            <div key={index} className="col-sm-6 mb-3 mb-sm-0 pt-4">
                                <div className="card bg-warning bg-opacity-25 border border-secondary border-2 rounded-end">
                                    <div className="card-body ">
                                        <div className="card-header bg-transparent fw-bolder fs-3 text-center">
                                            User {index + 1} Details{" "}
                                        </div>
                                        <p className="card-text">
                                            <strong> Name : </strong> {data?.name}
                                        </p>
                                        <p className="card-text">
                                            <strong> UserName : </strong> {data?.username}
                                        </p>
                                        <p className="card-text">
                                            <strong> Email : </strong> {data?.email}
                                        </p>
                                        <span className="card-text">
                                            <strong> Address : </strong>
                                            <ul className="">
                                                <li>
                                                    <b> Street: </b> {data?.address.street}
                                                </li>
                                                <li>
                                                    <b> Suite : </b> {data?.address.suite}
                                                </li>
                                                <li>
                                                    <b> City : </b>
                                                    {data?.address.city}
                                                </li>
                                                <li>
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
                                                            <b> Lng : </b>
                                                            {data?.address.geo.lng}
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </span>
                                        <p className="card-text">
                                            <strong> Phone : </strong> {data?.phone}
                                        </p>
                                        <p className="card-text">
                                            <strong> Website : </strong> {data?.website}
                                        </p>
                                        <span className="card-text">
                                            <strong> Company : </strong>
                                            <ul>
                                                <li>
                                                    <b> Name : </b> {data?.company.name}
                                                </li>
                                                <li>
                                                    <b> CatchPhrase : </b> {data?.company.catchPhrase}
                                                </li>
                                                <li>
                                                    <b> Bs : </b> {data?.company.bs}
                                                </li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                            </div>


                        ))}
                    </div>
                </div >
            }
        </>
    );
}
