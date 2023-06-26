import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PostOrder, GetOrder, DeleteOrderData } from '../Redux/Action/OrderAction';
import { GetStockData } from '../Redux/Action/StockAction';
import swal from 'sweetalert';
import DataTable from "react-data-table-component";

export default function Order() {

    const dispatch = useDispatch();
    const [orderdata, setorderdata] = useState({
        customer_name: "",
        order_qty: "",
        stockId: ""
    })

    function ChangeFormValue(e) {
        setorderdata({ ...orderdata, [e.target.name]: e.target.value });
    }

    // const [orderrecords, setorderrecords] = useState([]);
    const state = useSelector((state) => state?.orderData?.orderData?.data);
    console.log("order data", state)
    // setorderrecords(state)

    const [formErrors, setFormErrors] = useState({});

    const stockstate = useSelector((state) => state?.stockData?.stockData);



    useEffect(() => {
        dispatch(GetOrder())

    }, [])

    function SubmitorderForm() {

        const errors = validate(orderdata);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("fbggfhngnj", orderdata)
            dispatch(PostOrder(orderdata));
            console.log("Order Data", orderdata);
            swal("Data Added!", "Order Data Added Success!", "success");
            setorderdata({
                customer_name: "",
                order_qty: "",
                stockId: ""
            })

        }


    }

    function handleButtonClick(orderId) {

        dispatch(DeleteOrderData(orderId))
    }

    const validate = (values, e) => {
        const errors = {};
        const nameRegex = /^[A-Za-z][A-Za-z0-9_]{2,12}/;
        const numberRegex = /^[0-9]{1,6}$/;


        if (!values.customer_name) {
            errors.customer_name = " customer_name is required!";
        } else if (!nameRegex.test(values.customer_name)) {
            errors.customer_name = " This is not a valid customer name format!";
        }

        if (!values.order_qty) {
            errors.order_qty = " order_qty is required!";
        } else if (!numberRegex.test(values.order_qty)) {
            errors.order_qty = " This is not a valid order qty format!";
        }

        if (!values.stockId) {
            errors.stockId = " stock Name is required!";
        }



        return errors;
    };


    const column = [
        {
            name: "customer_name",
            selector: row => row.customer_name,
            sortable: true
        },
        {
            name: "stock_name",
            selector: row => row.stock?.stock_name,
            sortable: true
        },
        {
            name: "order_qty",
            selector: row => row.order_qty,
            sortable: true
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
                <button type="button" className="btn btn-info " data-bs-toggle="modal"
                    data-bs-target="#postModal">
                    <label htmlFor="">Add Order</label>
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
                            <h5 className="modal-title">Add Order Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="row g-2 p-2" id="partform">
                            <div className="mb-3">
                                <label className="form-label fontcolor"> <b>customer Name</b> </label>
                                <input type="text" className="form-control" name="customer_name" id="title"
                                    placeholder="customer_name" value={orderdata.customer_name} onChange={ChangeFormValue} />
                                <p>{formErrors.customer_name}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fontcolor"> <b>order Qty</b> </label>
                                <input type="number" className="form-control" id="description" name="order_qty" value={orderdata.order_qty} onChange={ChangeFormValue}
                                    placeholder=" order_qty "  ></input>
                                <p>{formErrors.order_qty}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fontcolor"> <b>Category</b> </label>
                                <select className="form-select" aria-label="Default select example" name='stockId' onChange={ChangeFormValue}>

                                    {stockstate?.map((data, index) => (
                                        <option value={data.id} >{data.stock_name}</option>
                                    ))}



                                </select>
                                <p>{formErrors.stockId}</p>
                            </div>
                        </form>

                        <div className="modal-footer justify-content-start">
                            <button type="button" className="btn btn-primary" id="savepost" onClick={SubmitorderForm} >Save</button>
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
