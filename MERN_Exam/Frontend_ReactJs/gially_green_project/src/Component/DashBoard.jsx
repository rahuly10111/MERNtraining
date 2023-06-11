import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DataGrid } from "@mui/x-data-grid";
import {
  GetSupplierData,
  PostSupplierData,
  GetHeaderData,
  getMonthSupplierData,
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

  const [supplierdata, setsupplierdata] = useState([]);
  const [headerdata, setheaderdata] = useState([]);
  const [monthdate, setmonthdate] = useState();

  // dayjs(new Date())

  useEffect(() => {
    dispatch(GetSupplierData());
    dispatch(GetHeaderData());
  }, []);

  function ChangeTableValue(e, index) {
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
    var a = data.header_data;

    setheaderdata([a, { [e.target.name]: e.target.value }]);
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
  }

  useEffect(() => {
    let dataes = [];
    if (MonthSupplierState[0]?.invoices?.length === 1) {
      setsupplierdata(MonthSupplierState);
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
            },
          ],
        });
      });
      setsupplierdata(dataes);
    }

    setheaderdata(headerState);
  }, [MonthSupplierState, monthdate]);

  const a = 0;

  function saveSupplierData() {
    dispatch(PostSupplierData(supplierdata));
  }

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
          <button type="button" class="btn btn-primary btn-sm m-2">
            Email Invoices{" "}
          </button>
          <button type="button" class="btn btn-primary btn-sm m-2">
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
                        name="hairservices"
                        value={data?.header_data?.hairservices}
                      />
                    </th>
                    <th>
                      <input
                        className="inputcell"
                        value={data?.header_data?.beautyservices}
                      />
                    </th>
                    <th>
                      <input
                        className="inputcell"
                        value={data?.header_data?.custom1}
                      />
                    </th>
                    <th>
                      <input
                        className="inputcell"
                        value={data?.header_data?.custom2}
                      />
                    </th>
                    <th>
                      <input
                        className="inputcell"
                        value={data?.header_data?.custom3}
                      />
                    </th>
                    <th>
                      <input
                        className="inputcell"
                        value={data?.header_data?.custom4}
                      />
                    </th>
                    <th>
                      <input
                        className="inputcell"
                        value={data?.header_data?.Net}
                      />
                    </th>
                    <th>
                      <input
                        className="inputcell"
                        value={data?.header_data?.VAT}
                      />
                    </th>
                    <th>
                      <input
                        className="inputcell"
                        value={data?.header_data?.Advancepaid}
                      />
                    </th>
                    <th>
                      <input
                        className="inputcell"
                        value={data?.header_data?.balancedue}
                      />
                    </th>
                  </tr>
                </>
              ))}
            </thead>

            <tbody className=" table table-group-divider">
              {supplierdata?.map((data, index) => (
                <>
                  {console.log("table data ", data)}
                  <tr key={index}>
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
                        defaultValue={a}
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
                      <input type="checkbox" />
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
