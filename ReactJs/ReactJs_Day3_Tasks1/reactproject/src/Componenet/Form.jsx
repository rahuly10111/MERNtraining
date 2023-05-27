import React, { useState } from "react";

export default function Form() {
    const [state, setstate] = useState({
        fname: "",
        lname: "",
    });

    const displaydata = (e) => {
        let Fname = document.getElementById('fname').value
        let Lname = document.getElementById('lname').value
        let data = {
            Fname,
            Lname
        }
        console.log(data)
        console.log(state);
        return data;
    };

    function changeFormValue(e) {
        setstate({ ...state, [e.target.name]: e.target.value });
    };

    function getAllData() {
        let data = displaydata()

        console.log('dgsyhdgewfiewd', data)

        var html = '';

        html = html + `<tr>
                     <td> ${data.Fname}</td>
                    <td>${data.Lname}</td>
               </tr>`

        document.getElementById('tbody').innerHTML += html

    }

    return (
        <>
            <div className="container p-4 border border-4 border-success">
                <div className="row g-3">
                    <div className="col">
                        <input
                            id="fname"
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            aria-label="First name"
                            value={state.fname}
                            onChange={changeFormValue}
                            name="fname"
                        />
                    </div>
                    <div className="col">
                        <input
                            id="lname"
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            aria-label="Last name"
                            value={state.lname}
                            onChange={changeFormValue}
                            name="lname"
                        />
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={() => {
                       
                        getAllData();
                    }}>
                        Primary
                    </button>
                </div>
                <br />
                <table className="table p-4">
                    <thead>
                        <tr>
                            <th scope="col">FName</th>
                            <th scope="col">LName</th>
                        </tr>
                    </thead>
                    <tbody id='tbody'>

                    </tbody>
                </table>

            </div>
        </>
    )
}
