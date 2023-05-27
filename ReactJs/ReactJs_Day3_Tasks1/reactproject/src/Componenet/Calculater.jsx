import React, { useState } from "react";

export default function Calculater() {
    const [number1, setnumber1] = useState();
    const [number2, setnumber2] = useState();
    const [result, setresult] = useState();

    const addNumber = (event) => {
        setnumber1(event.target.value);
        setnumber2(event.target.value);
        const addnumber = (parseInt(number1) + parseInt(number2));
        console.log(typeof (addnumber))
        console.log("n1", typeof (number1))
        setresult(addnumber);
    };

    const subNumber = (event) => {
        setnumber1(event.target.value);
        setnumber2(event.target.value);
        const subnumber = number1 - number2;
        console.log(typeof (subnumber))
        console.log("n1", typeof (number1))
        setresult(subnumber);
    };

    const multiNumber = (event) => {
        setnumber1(event.target.value);
        setnumber2(event.target.value);
        const multinumber = number1 * number2;
        setresult(multinumber);
    };

    const divNumber = (event) => {
        setnumber1(event.target.value);
        setnumber2(event.target.value);
        const divnumber = number1 / number2;
        setresult(divnumber);
    };

    const changeNumber1 = (event) => {
        setnumber1(event.target.value);
    };

    const changeNumber2 = (event) => {
        setnumber2(event.target.value);
    };

    return (
        <>
            <div className="container p-4 border border-4 border-info">
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        value={number1}
                        onChange={changeNumber1}
                    />
                    <label> Enter the First Number </label>
                </div>
                <div className="dropup-center dropup">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Opertion dropup
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <button className="dropdown-item" onClick={addNumber}>
                                Add
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={subNumber}>
                                sub
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={multiNumber}>
                                Multiply
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={divNumber}>
                                Divide{" "}
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        value={number2}
                        onChange={changeNumber2}
                    />
                    <label> Enter the Second Number </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        value={result}
                    />
                    <label> Result </label>
                </div>
            </div>
        </>
    );
}
