import React, { useEffect } from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PostStockData, GetStockData, DeleteStockData } from '../Redux/Action/StockAction';
import swal from 'sweetalert';
import DataTable from "react-data-table-component";


export default function Stock() {

    const dispatch = useDispatch();
    const [stockdata, setstockdata] = useState({
        stock_name: "",
        stock_qty: "",

    });

    const [formErrors, setFormErrors] = useState({});

    // const [stockrecords, setstockrecords] = useState([]);
    const state = useSelector((state) => state?.stockData?.stockData);
    //  console.log("stock data", state);
    //  console.log("order lenth", state[1]?.order?.length);



    function ChangeFormValue(e) {
        setstockdata({ ...stockdata, [e.target.name]: e.target.value });
    }

    var a = JSON.stringify(stockdata);

    useEffect(() => {
        dispatch(GetStockData());
        console.log("firstdvf");
    }, [])


    // let a = JSON.stringify(stockdata);

    // useEffect(() => {
    //     dispatch(GetStockData())
    //         .then(setstockrecords(state))

    // }, [SubmitstockForm]);



    function SubmitstockForm() {

        const errors = validate(stockdata);
        setFormErrors(errors);


        if (Object.keys(errors).length === 0) {

            const found = state.find(obj => {
                return obj.stock_name === stockdata.stock_name;
            });

            if (!found) {
                dispatch(PostStockData(stockdata));
                swal("Data Added!", "Post Data Added Success!", "success");
                setstockdata({
                    stock_name: "",
                    stock_qty: "",
                });

            } else {
                alert(" Same Stock Found")
            }

        }


    }


    const validate = (values, e) => {
        const errors = {};
        const nameRegex = /^[A-Za-z][A-Za-z0-9_]{2,12}/;
        const numberRegex = /^[0-9]{1,6}$/;


        if (!values.stock_name) {
            errors.stock_name = " stock_name is required!";
        } else if (!nameRegex.test(values.stock_name)) {
            errors.stock_name = " This is not a valid stock_name format!";
        }

        if (!values.stock_qty) {
            errors.stock_qty = " stock_qty is required!";
        } else if (!numberRegex.test(values.stock_qty)) {
            errors.stock_qty = " This is not a valid stock_qty format!";
        }



        return errors;
    };

    function handleButtonClick(stockId) {
        console.log("id ", stockId)
        dispatch(DeleteStockData(stockId))
    }

    const column = [
        {
            name: "stock_name",
            selector: row => row.stock_name,
            sortable: true
        },
        {
            name: "stock_qty",
            selector: row => row.stock_qty,
            sortable: true
        },
        {
            name: "order_qty",
            cell: ((row) => {
                if (row.order.length === 0) {
                    return 0;
                } else {
                    return (row.order[0]?.order_qty);
                }

            })
        },

        {
            name: "Action",
            cell: (row) => (
                <>
                    <span onClick={() => handleButtonClick(row.id)} className='btn btn-primary'>Delete</span>{'     '}
                </>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,

        }
    ]


    return (

        <>
            <div className="d-grid gap-2 p-4 col-6 mx-auto">
                <button type="button" className="btn btn-warning " data-bs-toggle="modal"
                    data-bs-target="#postModal">
                    <label htmlFor="">Add Stock</label>
                </button>
            </div>

            <div className='stockdataTable'>
                <DataTable
                    columns={column}
                    data={state}
                    pagination
                >

                </DataTable>

            </div>




            <div className="modal fade bg-secondary " id="postModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" >
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Stock Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="row g-2 p-2" id="partform">
                            <div className="mb-3">
                                <label className="form-label fontcolor"> <b>Stock Name</b> </label>
                                <input type="text" className="form-control" name="stock_name" id="title"
                                    placeholder="stock_name" value={stockdata.stock_name} onChange={ChangeFormValue} />
                                <p>{formErrors.stock_name}</p>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fontcolor"> <b>Stock Quantity</b> </label>
                                <input type="number" className="form-control" id="description" name="stock_qty" value={stockdata.stock_qty} onChange={ChangeFormValue}
                                    placeholder=" stock_qty "  ></input>
                                <p>{formErrors.stock_qty}</p>
                            </div>

                        </form>

                        <div className="modal-footer justify-content-start">
                            <button type="button" className="btn btn-primary" id="savepost" onClick={SubmitstockForm} >Save</button>
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
