import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Photos() {
    const [state, setstate] = useState([]);
    const [dates, setdate] = useState("hello");
    const getuser = async () => {
        try {
            console.log("first");
            const responseUser = await axios.get(
                `https://jsonplaceholder.typicode.com/photos`
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
                <div className="row ">
                    {state?.data?.map((data, index) => (
                        <>
                            <div key={index} className="col col-sm-3 mb-3 mb-sm-0 pt-4">
                                <div className="card h-100">
                                    <img
                                        src={data.thumbnailUrl}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        {/* <h5 className="card-title">Card title</h5> */}
                                        <p className="card-text">
                                            {" "}
                                            <strong> Title : </strong>
                                            {data.title}
                                        </p>
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
