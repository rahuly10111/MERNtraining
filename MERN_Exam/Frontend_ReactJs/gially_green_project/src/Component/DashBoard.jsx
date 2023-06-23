import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import Loader from './Loader';
import {
  GetSupplierData,
  PostSupplierData,
  GetHeaderData,
  getMonthSupplierData,
  PutSupplierData,
  getMonthHeaderData,
  PostHeaderData,
  PutHeaderData,
  PostEmail,
} from "../Redux/Action/SupplierAction";
import dayjs from "dayjs";

export default function DashBoard() {
  const dispatch = useDispatch();
  const supplierState = useSelector(
    (state) => state?.getSupplier?.supplierData
  );
  const headerState = useSelector((state) => state?.getHeader?.headerData);

  const MonthSupplierState = useSelector(
    (state) => state?.getMonthSupplier?.supplierData
  );


  const MonthHeaderState = useSelector(
    (state) => state?.getMonthHeader?.headerData
  );


  const [supplierdata, setsupplierdata] = useState([]);
  const [headerdata, setheaderdata] = useState([]);
  const [monthdate, setmonthdate] = useState();

  useEffect(() => {
    dispatch(GetSupplierData());
    dispatch(GetHeaderData());
  }, []);

  function ChangeTableValue(e, index) {
    setsupplierdata((prev) =>
      prev.map((d, i) => {
        if (i === index)
          d.invoices[0][e.target.name] = parseInt(e?.target?.value);
        return d;
      })
    );
  }

  function ChangeHeaderValue(e, data) {
    setheaderdata((prev) =>
      prev.map((d, i) => {
        d.header_data[e.target.name] = e?.target?.value;
        return d;
      })
    );

  }

  function changeDate(e) {
    const givenDate = new Date(e);
    const nextMonth = new Date(
      givenDate.getFullYear(),
      givenDate.getMonth() + 1,
      1
    );
    const lastDayOfMonth = new Date(nextMonth.getTime() - 1);
    const lastDate = new Date(lastDayOfMonth);
    setmonthdate(dayjs(lastDate));
    var invoicesMonth = new Date(givenDate).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    dispatch(getMonthSupplierData(invoicesMonth));
    dispatch(getMonthHeaderData(invoicesMonth));
  }

  useEffect(() => {
    let dataes = [];
    if (MonthHeaderState.length === 1) {
      setheaderdata(MonthHeaderState);
    } else {
      dataes.push({
        id: undefined,
        header_data: {
          header_1: "custom1",
          header_2: "custom2",
          header_3: "custom3",
          header_4: "custom4",
          header_5: "custom5",
          header_6: "custom6",
        },
        update_date: new Date(monthdate).toLocaleString("default", {
          month: "long",
          year: "numeric",
        }),
      });

      setheaderdata(dataes);
    }
  }, [MonthHeaderState, monthdate]);

  useEffect(() => {
    let dataes = [];
    if (MonthSupplierState[0]?.invoices?.length === 1) {
      setsupplierdata(MonthSupplierState?.map(d => {
        d.invoices[0].ischeck = false
        return d
      }));
    } else {
      supplierState?.map((data, index) => {
        dataes.push({
          id: data.id,
          name: data.name,
          invoices: [
            {
              id: undefined,
              col_1: 0,
              col_2: 0,
              col_3: 0,
              col_4: 0,
              col_5: 0,
              col_6: 0,
              col_7: 0,
              col_8: 0,
              col_9: 0,
              col_10: 0,
              update_date: new Date(monthdate).toLocaleString("default", {
                month: "long",
                year: "numeric",
              }),
              ischeck: false,
              isapprove: false
            },
          ],
        });
      });
      setsupplierdata(dataes);
    }


  }, [MonthSupplierState, monthdate]);

  const handleCheckboxChange = (e, index) => {
    const newsup = supplierdata.map((d, i) => {
      if (i === index) {
        d.invoices[0]["ischeck"] = !d?.invoices[0]?.ischeck;
      }
      return d
    })
    setsupplierdata(newsup)
  };

  function saveSupplierData() {
    if (supplierdata[0]?.invoices[0]?.id === undefined) {
      dispatch(PostSupplierData(supplierdata));
    } else {
      dispatch(PutSupplierData(supplierdata));
    }

    if (headerdata[0]?.id === undefined) {
      dispatch(PostHeaderData(headerdata));
    } else {
      dispatch(PutHeaderData(headerdata));
    }
  }

  async function emailInvoices() {
    dispatch(PostEmail(supplierdata));
  }

  function ApproveInvoices() {
    const newsup = supplierdata.map((d, i) => {
      if (d.invoices[0]?.ischeck === true) {
        d.invoices[0].isapprove = true;
        d.invoices[0].ischeck = false;
      }
      return d
    })
    setsupplierdata(newsup);
    if (supplierdata[0]?.invoices[0]?.id === undefined) {
      dispatch(PostSupplierData(supplierdata));
    } else {
      dispatch(PutSupplierData(supplierdata));
    }
  }

  async function DownloadPdf() {
    const res = await axios.post("http://localhost:3030/giallygreen/postpdf", supplierdata);
    const linkSource = `data:application/pdf;base64,${res.data}`;
    const downloadLink = document.createElement("a");
    const fileName = "invoiesBill.pdf";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }


  return (

    <>
      {supplierState?.loading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="row g-3 p-4 ">
            <p>Montly Invoice List </p>
            <div className="row">
              <label className="col-sm-2 col-form-label">
                <b> Choose Month :</b>
              </label>
              <div className="col">
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  className="monthpicker"
                >
                  <DemoContainer
                    components={["DatePicker", "DatePicker", "DatePicker"]}
                  >
                    <DatePicker
                      label={'"month" and "year"'}
                      views={["month", "year"]}
                      value={monthdate}
                      onChange={(e) => {
                        changeDate(e);
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div className="row p-2">
              <label className="col-sm-2 col-form-label">
                {" "}
                <b> Date :</b>
              </label>
              <div className="col-4">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label=" Month Last Date " value={monthdate} />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <label className="col-sm-2 col-form-label">
                {" "}
                <b> Invoice Reference :</b>
              </label>
              <div className="col-4">
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  className="monthpicker"
                >
                  <DemoContainer
                    components={["DatePicker", "DatePicker", "DatePicker"]}
                  >
                    <DatePicker
                      label={'"month" and "year"'}
                      views={["month", "year"]}
                      value={monthdate}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div className="col threebutton">
              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                onClick={emailInvoices}
              >
                Email Invoices{" "}
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                onClick={ApproveInvoices}
              >
                Approves Invoices
              </button>
              <button type="button" className="btn btn-primary btn-sm m-2" onClick={DownloadPdf}>
                Combine and Download
              </button>
            </div>
          </div>

          <hr />

          <>
            <div className=" datatable p-4">
              <table className=" table    border-dark  caption-top table-hover ">
                <caption>List of Supplier</caption>
                <thead className="table-light">
                  {headerdata?.map((data, index) => (
                    <>

                      <tr>
                        <th>
                          <input className="inputcell" value="sr.no" />{" "}
                        </th>
                        <th>
                          <input className="inputcell" value="supplier" />{" "}
                        </th>
                        <th>
                          <input
                            className="inputcell"
                            onChange={(e) => {
                              ChangeHeaderValue(e, data);
                            }}
                            name="header_1"
                            value={data?.header_data?.header_1}
                          />
                        </th>
                        <th>
                          <input
                            className="inputcell"
                            onChange={(e) => {
                              ChangeHeaderValue(e, data);
                            }}
                            name="header_2"
                            value={data?.header_data?.header_2}
                          />
                        </th>
                        <th>
                          <input
                            className="inputcell"
                            onChange={(e) => {
                              ChangeHeaderValue(e, data);
                            }}
                            name="header_3"
                            value={data?.header_data?.header_3}
                          />
                        </th>
                        <th>
                          <input
                            className="inputcell"
                            onChange={(e) => {
                              ChangeHeaderValue(e, data);
                            }}
                            name="header_4"
                            value={data?.header_data?.header_4}
                          />
                        </th>
                        <th>
                          <input
                            className="inputcell"
                            onChange={(e) => {
                              ChangeHeaderValue(e, data);
                            }}
                            name="header_5"
                            value={data?.header_data?.header_5}
                          />
                        </th>
                        <th>
                          <input
                            className="inputcell"
                            onChange={(e) => {
                              ChangeHeaderValue(e, data);
                            }}
                            name="header_6"
                            value={data?.header_data?.header_6}
                          />
                        </th>
                        <th>
                          <input className="inputcell" value="Net" />
                        </th>
                        <th>
                          <input className="inputcell" value="VAT" />
                        </th>
                        <th>
                          <input className="inputcell" value="AdvancePaid" />
                        </th>
                        <th>
                          <input className="inputcell" value="BalanceDue" />
                        </th>
                      </tr>
                    </>
                  ))}
                </thead>

                <tbody className=" table table-group-divider">
                  {supplierdata?.map((data, index) => (
                    <>
                      <tr
                        key={index}
                        style={{
                          background: data?.invoices[0]?.isapprove
                            ? "lightgreen"
                            : "white",
                        }}
                      >
                        <th>
                          <input className="inputcell" value={index + 1} readOnly />{" "}
                        </th>
                        <td>
                          <input className="inputcell" style=
                            {{
                              color: "blue"
                            }} value={data?.name} />
                        </td>
                        <td>
                          <input
                            className="inputcell"
                            type="number"
                            name="col_1"
                            value={data?.invoices[0]?.col_1}
                            onChange={(e) => {
                              ChangeTableValue(e, index);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="inputcell"
                            type="number"
                            name="col_2"
                            value={data?.invoices[0]?.col_2}
                            onChange={(e) => {
                              ChangeTableValue(e, index);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="inputcell"
                            name="col_3"
                            value={data?.invoices[0]?.col_3}
                            onChange={(e) => {
                              ChangeTableValue(e, index);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="inputcell"
                            name="col_4"
                            value={data?.invoices[0]?.col_4}
                            onChange={(e) => {
                              ChangeTableValue(e, index);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="inputcell"
                            name="col_5"
                            value={data?.invoices[0]?.col_5}
                            onChange={(e) => {
                              ChangeTableValue(e, index);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="inputcell"
                            name="col_6"
                            value={data?.invoices[0]?.col_6}
                            onChange={(e) => {
                              ChangeTableValue(e, index);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="inputcell"
                            style=
                            {{
                              color: "blue"
                            }}
                            name="col_7"
                            value={
                              parseInt(data?.invoices[0]?.col_1) +
                              parseInt(data?.invoices[0]?.col_2) +
                              parseInt(data?.invoices[0]?.col_3) +
                              parseInt(data?.invoices[0]?.col_4) +
                              parseInt(data?.invoices[0]?.col_5) +
                              parseInt(data?.invoices[0]?.col_6)
                            }
                            onChange={(e) => {
                              ChangeTableValue(e, index);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="inputcell"
                            style=
                            {{
                              color: "blue"
                            }}
                            name="col_8"
                            value={(
                              parseInt(data?.invoices[0]?.col_1) +
                              parseInt(data?.invoices[0]?.col_2) +
                              parseInt(data?.invoices[0]?.col_3) +
                              parseInt(data?.invoices[0]?.col_4) +
                              parseInt(data?.invoices[0]?.col_5) +
                              parseInt(data?.invoices[0]?.col_6)
                            ) + ((20 / 100) * (
                              parseInt(data?.invoices[0]?.col_1) +
                              parseInt(data?.invoices[0]?.col_2) +
                              parseInt(data?.invoices[0]?.col_3) +
                              parseInt(data?.invoices[0]?.col_4) +
                              parseInt(data?.invoices[0]?.col_5) +
                              parseInt(data?.invoices[0]?.col_6)
                            ))}
                            onChange={(e) => {
                              ChangeTableValue(e, index);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="inputcell"
                            style=
                            {{
                              color: "red"
                            }}
                            min={0}
                            name="col_9"
                            value={data?.invoices[0]?.col_9}
                            onChange={(e) => {
                              ChangeTableValue(e, index);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="inputcell"
                            style=
                            {{
                              color: "blue"
                            }}
                            name="col_10"
                            value={
                              (
                                parseInt(data?.invoices[0]?.col_1) +
                                parseInt(data?.invoices[0]?.col_2) +
                                parseInt(data?.invoices[0]?.col_3) +
                                parseInt(data?.invoices[0]?.col_4) +
                                parseInt(data?.invoices[0]?.col_5) +
                                parseInt(data?.invoices[0]?.col_6)
                              ) + ((20 / 100) * (
                                parseInt(data?.invoices[0]?.col_1) +
                                parseInt(data?.invoices[0]?.col_2) +
                                parseInt(data?.invoices[0]?.col_3) +
                                parseInt(data?.invoices[0]?.col_4) +
                                parseInt(data?.invoices[0]?.col_5) +
                                parseInt(data?.invoices[0]?.col_6)
                              )) - (data?.invoices[0]?.col_9)
                            }
                            // {data?.invoices[0]?.col_10}  Sum = n + (20/100) * n
                            onChange={(e) => {
                              ChangeTableValue(e, index);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="ischeck"
                            value={data?.invoices[0]?.ischeck}
                            onChange={(e) => {
                              handleCheckboxChange(e, index);
                            }}
                          />
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>

              <button
                type="button"
                class="btn btn-success"
                onClick={saveSupplierData}
              >
                Save
              </button>
            </div>
          </>
        </>

      )}




    </>

  );
}
