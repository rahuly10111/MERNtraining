import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Comments() {
    const [state, setstate] = useState();

    const getcomments = async () => {
        try {
            const responseComments = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
            setstate(responseComments)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {

        getcomments();

    });

    return (
        <>
            <div className="container p-4">
                <div className="row">
                    {
                        state?.data?.map((data, index) => (
                            <>
                                <div key={index} className="col-sm-6 mb-3 mb-sm-0 pt-4">
                                    <div className="card bg-warning bg-opacity-25 border border-secondary border-2 rounded-end">
                                        <div className="card-body ">
                                            <p className="card-text">
                                                <strong> Name : </strong> {data?.name}
                                            </p>
                                            <p className="card-text">
                                                <strong> Email : </strong> {data?.email}
                                            </p>
                                            <p className="card-text">
                                                <strong> Body : </strong> {data?.body}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </>
                        ))


                    }
                </div>

            </div>
        </>
    )
}
