import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
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
  console.log("first supplier", MonthSupplierState);

  const MonthHeaderState = useSelector(
    (state) => state?.getMonthHeader?.headerData
  );
  console.log("second Header ", MonthHeaderState.length);

  const [supplierdata, setsupplierdata] = useState([]);
  const [headerdata, setheaderdata] = useState([]);
  const [monthdate, setmonthdate] = useState();
  const [checkedItems, setCheckedItems] = useState([]);

  const [user, setUser] = useState({
    to: "rahulvy4228@gmail.com",
    subject: "hello",
    description: "",
  });

  async function emailInvoices() {
    dispatch(PostEmail(user));
    // await axios.post("http://localhost:3030/giallygreen/postemail", user)
    console.log("donedkjs");
  }

  // dayjs(new Date())

  console.log("checked ", checkedItems);

  useEffect(() => {
    dispatch(GetSupplierData());
    dispatch(GetHeaderData());
  }, []);

  function ChangeTableValue(e, index) {
    console.log(index);
    setsupplierdata((prev) =>
      prev.map((d, i) => {
        console.log(" check d", d);
        if (i === index)
          d.invoices[0][e.target.name] = parseInt(e?.target?.value);
        return d;
      })
    );

    // const updateData = supplierdata.map((d, mapIndex) => {
    //   if (mapIndex === index) {
    //     d.invoices[e.target.name] = e?.target?.value
    //   }
    //   return d
    // })

    // const updateNetData = updateData.map((data, mapIndex) => {
    //   const net = parseInt(data?.invoices?.col_1) +
    //     parseInt(data?.invoices?.col_2) +
    //     parseInt(data?.invoices?.col_3) +
    //     parseInt(data?.invoices?.col_4) +
    //     parseInt(data?.invoices?.col_5) +
    //     parseInt(data?.invoices?.col_6)
    //   if (mapIndex === index) {
    //     return { ...data, [e.target.name]: e.target.value, Net: net }
    //   }
    // })
    // setsupplierdata(updateNetData)
  }

  function ChangeHeaderValue(e, data) {
    setheaderdata((prev) =>
      prev.map((d, i) => {
        console.log(" header d", d);
        d.header_data[e.target.name] = e?.target?.value;
        return d;
      })
    );

    console.log("header", headerdata);
    //setheaderdata({ ...headerdata[0]?.header_data, [e.target.name]: e.target.value });
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
      setsupplierdata(MonthSupplierState);
    } else {
      console.log("supplier state", supplierState);
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
            },
          ],
        });
      });
      setsupplierdata(dataes);
    }

    // setheaderdata(headerState);
  }, [MonthSupplierState, monthdate]);

  const handleCheckboxChange = (e, index) => {
    console.log(e.target.value);
    console.log(index);
     
    const newsup = supplierdata.map((d,i)=>{

      if (i===index){
        d.invoices[0]["ischeck"] = !d?.invoices[0]?.ischeck;
      }
      return d
    })
    console.log("111111111111111111",newsup)
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

  function ApproveInvoices() {}

  return (
    <>
      <div class="row g-3 p-4 ">
        <p>Montly Invoice List </p>
        <div className="row">
          <label class="col-sm-2 col-form-label">
            <b> Choose Month :</b>
          </label>
          <div class="col">
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
          <label class="col-sm-2 col-form-label">
            {" "}
            <b> Date :</b>
          </label>
          <div class="col-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Basic date picker" value={monthdate} />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <label class="col-sm-2 col-form-label">
            {" "}
            <b> Invoice Reference :</b>
          </label>
          <div class="col-4">
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
            class="btn btn-primary btn-sm m-2"
            onClick={emailInvoices}
          >
            Email Invoices{" "}
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm m-2"
            onClick={ApproveInvoices}
          >
            Approves Invoices
          </button>
          <button type="button" class="btn btn-primary btn-sm m-2">
            Combine and Download
          </button>
        </div>
      </div>

      <hr />

      <>
        <div className="container p-4">
          <table className=" table suppliertable   border-dark  caption-top table-hover ">
            <caption>List of Supplier</caption>
            <thead>
              {console.log("bvheaderv", headerdata)}
              {headerdata?.map((data, index) => (
                <>
                  {console.log("header data ", data)}
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
                  {console.log("table data ", data)}
                  <tr
                    key={index}
                    style={{
                      background: data?.invoices[0]?.ischeck
                        ? "lightgreen"
                        : "white",
                    }}
                  >
                    <th>
                      <input className="inputcell" value={index + 1} readOnly />{" "}
                    </th>
                    <td>
                      <input className="inputcell" value={data?.name} />
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
                        name="col_8"
                        value={data?.invoices[0]?.col_8}
                        onChange={(e) => {
                          ChangeTableValue(e, index);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        className="inputcell"
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
                        name="col_10"
                        value={data?.invoices[0]?.col_10}
                        onChange={(e) => {
                          ChangeTableValue(e, index);
                        }}
                      />
                    </td>
                    <td>
                      {/* <input type="checkbox" /> */}
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
  );
}
