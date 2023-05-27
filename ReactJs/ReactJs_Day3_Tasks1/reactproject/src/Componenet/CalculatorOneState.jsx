import React, { useState } from "react";

export default function CalculatorOneState() {
    const [state, setstate] = useState({
        firstno: 0,
        secondno: 0,
        result: 0,
    });

    function changeValue(e) {
        setstate({ ...state, [e.target.name]: e.target.value });
    }

    const addNumber = () => {
        const addnumber = parseInt(state.firstno) + parseInt(state.secondno);
        setstate({ ...state, result: addnumber });
    };

    const subNumber = () => {
        const addnumber = parseInt(state.firstno) - parseInt(state.secondno);
        setstate({ ...state, result: addnumber });
    };

    const multiNumber = () => {
        const addnumber = parseInt(state.firstno) * parseInt(state.secondno);
        setstate({ ...state, result: addnumber });
    };

    const divNumber = () => {
        const addnumber = parseInt(state.firstno) / parseInt(state.secondno);
        setstate({ ...state, result: addnumber });
    };

    return (
        <>
            <div className="container p-4 border border-4 border-info">
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        value={state.firstno}
                        onChange={changeValue}
                        name="firstno"
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

                    {/* <select name="cars" id="cars">
                        <option value="+">Add</option>
                        <option value="-">Sub</option>
                        <option value="*">Mult</option>
                        <option value="/">Div</option>
                    </select> */}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        value={state.secondno}
                        onChange={changeValue}
                        name="secondno"
                    />
                    <label> Enter the Second Number </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        value={state.result}
                        name="result"
                    />
                    <label> Result </label>
                </div>
            </div>
        </>
    );
}
