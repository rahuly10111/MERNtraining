import React from 'react';
import logo from '/MERNtraining_git/MERNtraining/ReactJs/ReactJs_Tasks1/resumetasks/src/Images/photo.png';


export default function SideBar(props) {
    return (
        <div className=" col-3 w-25 bg-dark sidebar ">
            <img src={logo} className=' w-auto h-auto p-3 img-fluid rounded mx-auto d-block' alt="logo" />
            <h4 style={{ color: 'white' }} className='text-center' > Trainee Software Developer </h4>
            <div className=" p-4">
                <p style={{ color: "white" }} cl><i className="bi bi-person-circle iconsize" style={{ fontSize: "1.5rem" }}></i> &nbsp;&nbsp; {props.data.name}</p>
                <p style={{ color: "white" }} cl><i className="bi bi-telephone-fill iconsize" style={{ fontSize: "1.5rem" }}></i> &nbsp;&nbsp; {props.data.mobile}</p>
                <p style={{ color: "white" }}><i className="bi bi-envelope-fill iconsize" style={{ fontSize: "1.5rem" }}></i> &nbsp;&nbsp; {props.data.email}</p>
                <p style={{ color: "white" }}><i className="bi bi-globe iconsize" style={{ fontSize: "1.5rem" }}></i> &nbsp;&nbsp; {props.data.website} </p>
                <p style={{ color: "white" }}><i className="bi bi-geo-alt-fill iconsize" style={{ fontSize: "1.5rem" }}></i> &nbsp;&nbsp; {props.data.location} </p>
            </div>
        </div>
    )
}

// SideBar.prototype = { name: PropTypes.string.isRequired }
// SideBar.defaultProps = { name: "RRR" }